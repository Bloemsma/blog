import type { NextPage } from 'next';
import type { Post } from '../types';

import { getAllPosts } from '../lib/api';
import Layout from '../components/Layout';
import HeroPost from '../components/HeroPost';
import MorePosts from '../components/MorePosts';

export const getStaticProps = async () => {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
    ]);

    return {
        props: {
            allPosts,
        },
    };
};

interface HomeProps {
    allPosts: Post[];
}

const Home: NextPage<HomeProps> = ({ allPosts }) => {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);

    return (
        <Layout>
            {heroPost && <HeroPost post={heroPost} />}
            {morePosts.length > 0 && <MorePosts posts={morePosts} />}
            {!heroPost && <div>Soon...</div>}
        </Layout>
    );
};

export default Home;
