import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./crousel.scss";
const multiSlide = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

/* eslint-disable react/prop-types */
export default function MultiCarousel({ children, ...props }) {
  return (
    <Carousel
      {...props}
      ssr={true}
      dotListClass="custom-dot-list-style experience"
      itemClass="carousel-item-padding-40-px"
      responsive={multiSlide}
    >
      {children}
    </Carousel>
  );
}
