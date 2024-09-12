import "../assets/styles/home.scss";
import Button from "../components/buttons/Button";
import heroImage from "../assets/images/home_hero.svg";
import MultiCarousel from "../components/crousel/MultiCarousel";
import company1 from "../assets/images/companies/company1.png";
import company2 from "../assets/images/companies/company2.png";
import company3 from "../assets/images/companies/company3.png";
import company4 from "../assets/images/companies/company4.png";
import company5 from "../assets/images/companies/company5.png";

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

const image = [
  { companyImage: company1 },
  { companyImage: company2 },
  { companyImage: company3 },
  { companyImage: company4 },
  { companyImage: company5 },
];

export default function Home() {
  return (
    <div className="container page-wrap">
      <div className="row home-hero">
        <div className="col-12 col-md-6">
          <h1>
            The simplest way to search for a jon that suits your working style
          </h1>
          <p className="desc">
            See {`who's`} working at home, in the office, offsite or on holiday.
            Keep track of office numbers, book hot desks and sync it all to
            Outlook, Teams or Google.
          </p>
          <div className="row justify-content-start">
            <div className="col-12 col-md-6">
              <Button
                style={{
                  padding: "12px 20px",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
                isLInk={false}
                className="w-100"
              >
                Get Started - {`It's `}free
              </Button>
            </div>
            <div className="col-12 col-md-6">
              <Button
                style={{
                  padding: "12px 20px",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
                isLInk={true}
                className="w-100"
                to="/jobs"
              >
                Start Serching
              </Button>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 hero_img">
          <img src={heroImage} alt="hero image" />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <h4 className="text-center my-4">
            Trusted and loved by companies worldwide.
          </h4>
          <div className="slider_wrap">
            <MultiCarousel
              infinite={true}
              responsive={multiSlide}
              autoPlay={true}
              swipeable={false}
              draggable={false}
              showDots={false}
              autoPlaySpeed={4000}
              keyBoardControl={false}
              customTransition="all 4s"
              transitionDuration={500}
              minimumTouchDrag={0}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              containerClass="carousel-container mt-4"
            >
              {image.map((img, i) => (
                <div className="slider_image" key={i}>
                  <img
                    className="company_img"
                    src={img.companyImage}
                    alt="company"
                  />
                </div>
              ))}
            </MultiCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}
