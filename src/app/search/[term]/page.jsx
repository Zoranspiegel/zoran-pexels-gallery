import Gallery from '@/app/components/Gallery';

export async function generateMetadata({ params }) {
  const { term } = await params;
  return {
    title: `Zoran's Pexels Gallery - Results for ${term}`
  };
}

export default async function searchPage({ params }) {
  const { term } = await params;
  return <Gallery term={term} />;
}
