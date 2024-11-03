import fetchImages from '@/lib/fetchImages';
import env from '@/lib/env';
import { url } from 'envalid';

export default async function Gallery({ term }) {
  const imagesUrl = term
    ? `${env.PEXELS_API_URL}/search?per_page=1&query=${term}`
    : `${env.PEXELS_API_URL}/curated?per_page=1&page=2`;

  const images = await fetchImages(imagesUrl);

  console.log(images);

  if (!images) return <h1>No Images Found</h1>;

  return <div>Gallery</div>;
}
