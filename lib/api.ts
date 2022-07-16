import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

type Items = {
    [key: string]: string;
};

const postsDirectory = join(process.cwd(), '_posts');

export const getPostSlugs = (): string[] => {
    return fs.readdirSync(postsDirectory);
};

export const getPostBySlug = (slug: string, fields: string[] = []): Items => {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = join(postsDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const { data, content } = matter(fileContents);

    const items: Items = {};

    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug;
        }

        if (field === 'content') {
            items[field] = content;
        }

        if (typeof data[field] !== 'undefined') {
            items[field] = data[field];
        }
    });

    return items;
};

export const getAllPosts = (fields: string[] = []): Items[] => {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

    return posts;
};
