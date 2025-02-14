const API_KEY = import.meta.env.VITE_FLICKR_API_KEY;
const BASE_URL = "https://api.flickr.com/services/rest/";

export const fetchImages = async (category: string, query: string) => {
  const searchTerm = query ? query : category; // Use category if no query is provided
  const url = `${BASE_URL}?method=flickr.photos.search&api_key=${API_KEY}&tags=${searchTerm}&per_page=18&format=json&nojsoncallback=1`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.photos.photo;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};
