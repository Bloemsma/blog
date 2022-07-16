import Link from 'next/link';
import type { FC } from 'react';

const Banner: FC = () => {
    return (
        <div className="bg-indigo-600">
            <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-around flex-wrap">
                    <p className="text-white truncate">
                        <span className="md:hidden">
                            Check out the latest post!
                        </span>
                        <span className="hidden md:inline">
                            Big news! Check out the latest post.
                        </span>
                        &nbsp;
                        <span className="hidden md:inline">
                            <Link href="/">
                                <a className="underline">Learn more&nbsp;→</a>
                            </Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
