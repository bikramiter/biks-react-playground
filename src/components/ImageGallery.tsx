import { useEffect, useState } from "react";
import { fetchImages } from "../api/flickr";

interface Image {
  id: string;
  farm: number;
  server: string;
  secret: string;
  title: string;
}

const ImageGallery = ({ category }: { category: string }) => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    fetchImages(category).then((photos) => {
      setImages(photos);
    });
  }, [category]);

  return (
    <div className="gallery-wrapper">
      <div className="gallery-container">
        <div className="image-grid">
          {images.map((image) => (
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
