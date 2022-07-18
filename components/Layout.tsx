import { FC, ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
    children: ReactNode;
    title?: string;
}

const Layout: FC<LayoutProps> = ({ children, title = 'Massaal blog' }) => (
    <main className="bg-gray-100 min-h-screen">
        <Head>
            <title>{title}</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <meta name="robots" content="all" />
            <meta
                name="description"
                content="Web development blog for Massaal"
            />
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        </Head>
        <div className="text-center pt-3 mb-8 md:pb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            Massaal
        </div>
        <div className="container mx-auto px-4">{children}</div>
    </main>
);

export default Layout;
