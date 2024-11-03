import Link from 'next/link';
import Image from 'next/image';
import styles from './Photo.module.css';

export default function Photo({ photo }) {
  const photoHeightRatio = photo.height / photo.width;
  const photoWidth = 300;
  const photoHeight = Math.ceil(photoWidth * photoHeightRatio);
  const photoRowSpan = Math.ceil(photoHeight / 10);

  return (
    <div className={styles.photo__container} style={{ gridRow: `span ${photoRowSpan}` }}>
      <Link href={photo.url} target="_blank">
        <Image
          src={photo.src.large}
          width={photoWidth}
          height={photoHeight}
          alt={photo.alt}
          sizes={`${photoWidth}px`}
          className={styles.photo__image}
        />
      </Link>
    </div>
  );
}
