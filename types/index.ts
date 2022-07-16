import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface Author {
    name: string;
}

export interface Post {
    slug: string;
    title: string;
    date: string;
    coverImage: string;
    author: Author;
    excerpt: string;
    ogImage: {
        url: string;
    };
    content: MDXRemoteSerializeResult<Record<string, unknown>>;
}
