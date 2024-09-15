import Hero from "../components/hero/Hero";
import careerImg from "../assets/images/career.svg";
import Button from "../components/buttons/Button";
import Metadata from "../components/metadata/Metadata";

export default function Career() {
  return (
    <>
      <Metadata title="Career" description="Empowering others" />
      <div className="container page-wrap">
        <Hero
          showBtn={false}
          img={careerImg}
          title="Dynamic work. Encouraging atmosphere. Fun people."
          para="Developing new technologies excites you. You’ve got that team spirit and want to get your ideas brought to life. We’re perfect for each other. Make the most out of your career and personal life. We’re not just family-friendly, we’re life-friendly."
        />
        <div className="row mt-4 pt-4">
          <div className="col-12">
            <h2 className="mb-4">Make the most of life</h2>
            <p>
              With us, you’ll take risks, push boundaries, and grow more than
              you thought possible. And you won’t be alone on that journey. We
              have something special here; we put our employees at the center of
              everything we do, and we know that what we offer is essential not
              only to your work but to your life too. In addition to world-class
              benefits designed to help you and your family live well, we offer
              competitive pay, bonuses and stock awards to eligible employees
              based on individual performance, as well as benefits to help you
              lead a healthy life, invest in your future, and enjoy your journey
              here at Microsoft. Empowering you. So, you can empower the world.
              There may be some variances in specific benefits across regions.{" "}
            </p>
          </div>
          <div className="col-12 mt-4">
            <Button className="btn-white">Work with us, send us your CV</Button>
          </div>
        </div>
      </div>
    </>
  );
}
