import React from "react";
import "./imageviewer.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  images: string[];
  setShowViewer: React.Dispatch<React.SetStateAction<boolean>>;
}
const ImageViewer: React.FC<Props> = ({ images, setShowViewer }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="imageviewer-wrapper">
      <div className="container">
        <div className="images">
          <Slider {...settings}>
            {images.map((photo, i) => (
              <img
                className="img"
                loading="lazy"
                src={photo}
                alt="certifcates"
                key={i}
              />
            ))}
          </Slider>
        </div>
      </div>
      <span className="close" onClick={() => setShowViewer(false)}>
        X
      </span>
    </div>
  );
};

export default ImageViewer;
