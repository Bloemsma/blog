import DateFormatter from './DateFormatter';
import { FC } from 'react';
import Link from 'next/link';
import type { Author, Post } from '../types/index';
import CoverImage from './CoverImage';

type PostPreviewProps = {
    post: Post;
};

const PostPreview: FC<PostPreviewProps> = ({ post }) => {
    return (
        <div>
            <div className="mb-5">
                <CoverImage
                    slug={post.slug}
                    title={post.title}
                    src={post.coverImage}
                />
            </div>
            <h3 className="text-3xl mb-3 leading-snug">
                <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
                    <a className="text-indigo-600 hover:text-indigo-700 hover:underline">
                        {post.title}
                    </a>
                </Link>
            </h3>
            <div className="text-lg mb-4">
                <DateFormatter dateString={post.date} />
            </div>
            <p className="text-lg leading-relaxed mb-4">{post.excerpt}</p>
            <p>{post.author.name}</p>
        </div>
    );
};

export default PostPreview;
