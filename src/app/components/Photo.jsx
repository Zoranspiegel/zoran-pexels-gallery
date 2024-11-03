import Link from 'next/link';
import Image from 'next/image';

export default function Photo({ photo }) {
  const photoHeightRatio = photo.height / photo.width;
  const photoWidth = 300;
  const photoHeight = Math.ceil(photoWidth * photoHeightRatio);

  return (
    <div>
      <Link href={photo.url} target="_blank">
        <Image
          src={photo.src.large}
          width={photoWidth}
          height={photoHeight}
          alt={photo.alt}
          sizes={`${photoWidth}px`}
        />
      </Link>
    </div>
  );
}
