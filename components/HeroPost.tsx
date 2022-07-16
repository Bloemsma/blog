import type { Post } from '../types/index';
import DateFormatter from './DateFormatter';
import Link from 'next/link';
import { FC } from 'react';

interface HeroPostProps {
    post: Post;
}

const HeroPost: FC<HeroPostProps> = ({ post }) => {
    return (
        <section>
            <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-16 md:mb-24">
                <div>
                    <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
                        <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
                            <a className="text-indigo-600 hover:text-indigo-700 hover:underline">
                                {post.title}
                            </a>
                        </Link>
                    </h3>
                    <div className="mb-4 md:mb-0 text-lg">
                        <DateFormatter dateString={post.date} />
                    </div>
                </div>
                <div>
                    <p className="text-lg leading-relaxed mb-4">
                        {post.excerpt}
                    </p>
                    <p>{post.author.name}</p>
                </div>
            </div>
        </section>
    );
};

export default HeroPost;
