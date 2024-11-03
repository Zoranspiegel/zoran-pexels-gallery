import env from './env';

export default async function fetchImages(url) {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: env.PEXELS_API_KEY
      }
    });

    if (!res.ok) throw new Error('Failed to load images');

    const resJson = await res.json();

    return resJson;
  } catch (error) {
    console.error(error.message);
  }
}