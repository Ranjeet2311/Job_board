import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./crousel.scss";

/* eslint-disable react/prop-types */
export default function MultiCarousel({ children, ...props }) {
  return (
    <Carousel
      {...props}
      ssr={true}
      dotListClass="custom-dot-list-style experience"
      itemClass="carousel-item-padding-40-px"
    >
      {children}
    </Carousel>
  );
}
