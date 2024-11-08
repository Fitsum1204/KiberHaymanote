import React, { useState, useEffect } from 'react';
import './cover.styles.scss';
import image1 from '../../assets/p1.webp';
import image2 from '../../assets/image_2.png';
import image3 from '../../assets/image_3.png';
import image4 from '../../assets/image_4.png';
const imageUrls = [image1, image2, image3,image4];
const texts = ["እንኳን ደህና መጡ", "Welcome", "እንቋዕ በሰላም መጻእክሙ","እንዳልጠመቅ የሚከለክለኝ ማነው?"];

const Cover = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImage, setLoadedImage] = useState(imageUrls[0]);
  const [loadedText, setLoadedText] = useState(texts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % imageUrls.length;
      const nextImage = new Image();
      nextImage.src = imageUrls[nextIndex];
      nextImage.onload = () => {
        setCurrentIndex(nextIndex);
        setLoadedImage(imageUrls[nextIndex]);
        setLoadedText(texts[nextIndex]);
      };
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${loadedImage})`,
      }}
    >
      <h2>{loadedText}</h2>
    </div>
  );
};

export default Cover;
