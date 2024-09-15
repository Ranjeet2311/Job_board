import "../assets/styles/home.scss";
import heroImage from "../assets/images/home_hero.svg";
import hero2 from "../assets/images/home2.svg";
import MultiCarousel from "../components/crousel/MultiCarousel";
import company1 from "../assets/images/companies/company1.png";
import company2 from "../assets/images/companies/company2.png";
import company3 from "../assets/images/companies/company3.png";
import company4 from "../assets/images/companies/company4.png";
import company5 from "../assets/images/companies/company5.png";
import Hero from "../components/hero/Hero";
import Team from "../components/team/Team";
import Metadata from "../components/metadata/Metadata";

const image = [
  { companyImage: company1 },
  { companyImage: company2 },
  { companyImage: company3 },
  { companyImage: company4 },
  { companyImage: company5 },
];

export default function Home() {
  return (
    <>
      <Metadata title="Home" description="Empowering others" />
      <div className="container page-wrap">
        <Hero
          showBtn={true}
          img={heroImage}
          title="The simplest way to find a job that suits your working style"
          para=" See who's working at home, in the office, offsite or on holiday.
        Keep track of office numbers, book hot desks and sync it all to Outlook, Teams or Google."
        ></Hero>

        <div className="row mt-4">
          <div className="col-12">
            <h4 className="text-center my-4">
              Trusted and loved by companies worldwide.
            </h4>
            <div className="slider_wrap">
              <MultiCarousel
                infinite={true}
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
        <div className="row second-section">
          <div className="col-12 col-md-6 hero_img">
            <img src={hero2} alt="hero image" />
          </div>
          <div className="col-12 col-md-6">
            <h1>Looking for hybrid working</h1>
            <p>
              Having this visibility lets you better plan team workshops or chat
              to the right people outside of an organised Microsoft Teams call.
              Search tools let you quickly look someone up whilst our company
              view provides an elegant way to visualise team structures. Team
              today is designed for teams who {`haven't`} got time for complex
              training or set up. Give it a try and see how easy it is to create
              and manage teams. Sync with Azure to manage your leavers and
              joiners process.
            </p>
          </div>
          <div className="col-12 team-slider">
            <Team></Team>
          </div>
        </div>
      </div>
    </>
  );
}
