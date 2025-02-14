const API_KEY = import.meta.env.VITE_FLICKR_API_KEY;
const BASE_URL = "https://api.flickr.com/services/rest/";

export const fetchImages = async (query: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}?method=flickr.photos.search&api_key=${API_KEY}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    );
    const data = await response.json();
    return data.photos.photo;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};
