import "./reviews.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar } from "react-icons/ai";
import ReviewBanner from "../../assets/images/reviews.webp";
import { BsChatRightQuote } from "react-icons/bs";
import * as Scroll from "react-scroll";

var Element = Scroll.Element;
const Reviews = () => {
  const customersArr = [
    {
      name: "Nicole Zakher",
      text: "Elie is extremely committed and focused. He gives me 110% of his time and corrects the slightest move. The session passes so fast as I am extremely engaged and time flies. Thank you Elie, I am blessed to have you by my side.",
    },
    {
      name: "Michael Downey",
      text: "  The best experience I’ve ever had with fitness, worth every penny and I’ve never felt stronger and healthier - I highly recommend Elie!”",
    },
    {
      name: "Marc Nassar",
      text: "I genuinely recommend elie for anyone looking to improve functionality, strength and endurance. He provides a world class service fit for any athlete",
    },
    {
      name: "Georges Nassar",
      text: "  I had a posture issue and a shoulder pain for the past 5 years. I started with Elie two years back. His training is totally different from traditional training. He activates the whole body muscles through different techniques of functional training.",
    },
    {
      name: "Isabelle Fanj",
      text: "Training with Elie has been the most successful and enjoyable workout I ever had. My body became more tonic. He understood my weaknesses and needs and used the perfect techniques to push me further without injuring my body or putting it under unhealthy stress.",
    },
  ];
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };
  return (
    <Element name="reviews">
      <div className="reviews-wrapper">
        <div className="container">
          <span className="icon-container">
            <BsChatRightQuote className="icon-quote" />
          </span>
          <div className="reviews">
            <Slider {...settings}>
              {customersArr.map((rev) => (
                <div className="client" key={rev.name}>
                  <p data-aos="fade-in">{rev.text}</p>

                  <div>
                    <div className="star-icon-container" data-aos="zoom-out">
                      <AiFillStar className="star-icon" />
                      <AiFillStar className="star-icon" />
                      <AiFillStar className="star-icon" />
                      <AiFillStar className="star-icon" />
                      <AiFillStar className="star-icon" />
                    </div>
                    <h4 data-aos="zoom-out">{rev.name}</h4>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Reviews;
