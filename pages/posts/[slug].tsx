import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { Post } from '../../types';

import Image from 'next/image';
import { useRouter } from 'next/router';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import Layout from '../../components/Layout';
import { getAllPosts, getPostBySlug } from '../../lib/api';
import Link from 'next/link';
import CoverImage from '../../components/CoverImage';

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params as { slug: string };

    const post = getPostBySlug(slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
    ]);
    const content = await serialize(post.content || '', {
        mdxOptions: {
            rehypePlugins: [
                rehypeSlug,
                [rehypeAutolinkHeadings, { behaviour: 'wrap' }],
            ],
        },
    });

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = getAllPosts(['slug']);

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            };
        }),
        fallback: false,
    };
};

interface PostPageProps {
    post: Post;
    morePosts: Post[];
    preview?: boolean;
}

const PostPage: NextPage<PostPageProps> = ({ post, morePosts, preview }) => {
    const router = useRouter();

    if (!router.isFallback && !post?.slug) {
        return (
            <Layout>
                <p>test</p>
            </Layout>
        );
    }
    return (
        <Layout title={`${post.title} - Massaal blog`}>
            <div className="prose lg:prose-xl mx-auto pb-8">
                <Link href="/">
                    <a className="text-indigo-600 hover:text-indigo-700">
                        <span aria-hidden="true">←</span>&nbsp;Back
                    </a>
                </Link>

                <h1 className="pt-4">{post.title}</h1>
                <div className="mb-8 md:mb-16 sm:mx-0">
                    <CoverImage title={post.title} src={post.coverImage} />
                </div>
                <MDXRemote {...post.content} components={{ Image }} />
            </div>
        </Layout>
    );
};

export default PostPage;
