import fetchImages from '@/lib/fetchImages';
import env from '@/lib/env';
import Photo from './Photo';

export default async function Gallery({ term }) {
  const imagesUrl = term
    ? `${env.PEXELS_API_URL}/search?per_page=80&query=${term}`
    : `${env.PEXELS_API_URL}/curated?per_page=80`;

  const images = await fetchImages(imagesUrl);

  if (!images?.total_results) return <h1>No Images Found</h1>;

  return (
    <div>
      {images.photos.map((photo) => (
        <Photo key={photo.id} photo={photo}/>
      ))}
    </div>
  );
}
