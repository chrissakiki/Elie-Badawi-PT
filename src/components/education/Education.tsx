import React from "react";
import "./education.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CFSC from "../../assets/images/logo/CFSC.png";
import EXOS from "../../assets/images/logo/EXOS.png";
import COMUE from "../../assets/images/logo/COMUE.png";
import FLB from "../../assets/images/logo/FLB.png";
import FMS from "../../assets/images/logo/FMS.png";
import RC from "../../assets/images/logo/RC.png";
import POLIQUIN from "../../assets/images/logo/POLIQUIN.png";
import UA from "../../assets/images/logo/UA2.png";
import HARVARD from "../../assets/images/logo/HARVARD2.png";
import image0 from "../../assets/images/certificates/0.webp";
import image1 from "../../assets/images/certificates/1.webp";
import image2 from "../../assets/images/certificates/2.webp";
import image3 from "../../assets/images/certificates/3.webp";
import image4 from "../../assets/images/certificates/4.webp";
import image5 from "../../assets/images/certificates/5.webp";
import image6 from "../../assets/images/certificates/6.webp";
import image7 from "../../assets/images/certificates/7.webp";
import image8 from "../../assets/images/certificates/8.webp";
import image9 from "../../assets/images/certificates/9.webp";
import image10 from "../../assets/images/certificates/10.webp";
import image11 from "../../assets/images/certificates/11.webp";
import image12 from "../../assets/images/certificates/12.webp";
import image13 from "../../assets/images/certificates/13.webp";
import image14 from "../../assets/images/certificates/14.webp";
import image15 from "../../assets/images/certificates/15.webp";
import image16 from "../../assets/images/certificates/16.webp";
import image17 from "../../assets/images/certificates/17.webp";
import image18 from "../../assets/images/certificates/18.webp";
import image19 from "../../assets/images/certificates/19.webp";
import image20 from "../../assets/images/certificates/20.webp";
import image21 from "../../assets/images/certificates/21.webp";
import image22 from "../../assets/images/certificates/22.webp";
import ImageViewer from "../imageViewer/ImageViewer";
import * as Scroll from "react-scroll";

var Element = Scroll.Element;
const Education = () => {
  const [showViewer, setShowViewer] = React.useState(false);
  const imagesArr = [EXOS, CFSC, UA, FLB, FMS, POLIQUIN, RC, COMUE, HARVARD];

  const certArr = [
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image0,
    image1,
    image2,
    image3,
    image4,
    image5,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,

    image21,
    image22,
  ];
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <Element name="education">
      <div className="education-wrapper">
        <div className="container">
          <h3 data-aos="fade-in">
            A movement professional with a proven international coaching
            experience.
          </h3>

          <div className="logos" data-aos="fade-in">
            <Slider {...settings}>
              {imagesArr.map((img) => (
                <div className="logo" key={img}>
                  <img src={img} alt="certificates" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <p>
          <span onClick={() => setShowViewer(true)}>Click here</span> to check
          all my certificates.
        </p>

        {showViewer && (
          <ImageViewer images={certArr} setShowViewer={setShowViewer} />
        )}
      </div>
    </Element>
  );
};

export default Education;
