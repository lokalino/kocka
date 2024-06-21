import React, { useEffect, useState } from 'react';

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const slides = document.getElementsByClassName('mySlides');
    const showSlides = () => {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      setSlideIndex((prevIndex) => (prevIndex + 1 > slides.length ? 1 : prevIndex + 1));
      if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = 'block';
      }
    };
    const interval = setInterval(showSlides, 2000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  const plusSlides = (n) => {
    const slides = document.getElementsByClassName('mySlides');
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex > slides.length) newIndex = 1;
      if (newIndex < 1) newIndex = slides.length;
      return newIndex;
    });
  };

  return (
    <div className="slideshow-container">
      <div className="mySlides fade">
        <img src="images (1).jpg" alt="Slideshow image 1" style={{ width: '100%' }} />
      </div>
      <div className="mySlides fade">
        <img src="/images/image2.jpg" alt="Slideshow image 2" style={{ width: '100%' }} />
      </div>
      <div className="mySlides fade">
        <img src="/images/image3.jpg" alt="Slideshow image 3" style={{ width: '100%' }} />
      </div>
      <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
      <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
    </div>
  );
};

export default Slideshow;
