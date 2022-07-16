import Link from 'next/link';
import Image from 'next/image';

type Props = {
    title: string;
    src: string;
    slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
    const image = (
        <Image
            src={src}
            alt={`Cover Image for ${title}`}
            className="shadow-small hover:shadow-lg transition-shadow duration-200"
            width={1703}
            height={980}
        />
    );
    return (
        <div className="sm:mx-0">
            {slug ? (
                <Link as={`/posts/${slug}`} href="/posts/[slug]">
                    <a aria-label={title}>{image}</a>
                </Link>
            ) : (
                image
            )}
        </div>
    );
};

export default CoverImage;