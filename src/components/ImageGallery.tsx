import { useEffect, useState } from "react";
import { fetchImages } from "../api/flickr";

interface Image {
  id: string;
  farm: number;
  server: string;
  secret: string;
  title: string;
}

const ImageGallery = ({
  category,
  searchQuery,
}: {
  category: string;
  searchQuery: string;
}) => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchImages(category, searchQuery).then((photos) => {
      setImages(photos);
      setLoading(false);
    });
  }, [category, searchQuery]);

  return (
    <div className="gallery-wrapper">
      <div className="gallery-container">
        <h2>
          {searchQuery ? `Results for "${searchQuery}"` : `${category} Images`}
        </h2>
        {loading && <p>Loading images...</p>}
        {!loading && images.length === 0 && (
          <p>No images found for "{category}"</p>
        )}
        <div className="image-grid">
          {!loading &&
            images.map((image) => (
              <img
                key={image.id}
                src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
                alt={image.title}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
