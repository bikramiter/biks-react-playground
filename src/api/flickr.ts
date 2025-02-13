const apiKey = import.meta.env.VITE_FLICKR_API_KEY;

export const fetchFlickrImages = async (query: string) => {
  try {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch images");
    }
    const data = await response.json();
    return data.photos.photo;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};
