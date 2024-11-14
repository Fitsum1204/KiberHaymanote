import React, { useState, useEffect } from 'react';
import './cover.styles.scss';
import image1 from '../../assets/5877569819119830495.jpg';
import image2 from '../../assets/5877569819119830509.jpg';
import image3 from '../../assets/5877692560695215071.jpg';
import image4 from '../../assets/5877569819119830860.jpg';

const imageUrls = [image1, image2, image3, image4];
const texts = [
  "እንኳን ደህና መጡ", 
  "Welcome", 
  "እንቋዕ በሰላም መጻእክሙ", 
  "እንዳልጠመቅ የሚከለክለኝ ማነው?"
];

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
        backgroundImage: `url(${loadedImage})`
      }}
    >
      <div className="overlay">
        <h2>{loadedText}</h2>
      </div>
    </div>
  );
};

export default Cover;
