import Hero from "../components/hero/Hero";
import careerImg from "../assets/images/about.svg";
import Button from "../components/buttons/Button";
import teamPicA from "../assets/images/team_images/teamA.png";
import teamPicB from "../assets/images/team_images/teamB.png";
import teamPicC from "../assets/images/team_images/teamC.png";
import teamPicD from "../assets/images/team_images/teamD.png";
import teamPicE from "../assets/images/team_images/teamE.png";
import teamPicF from "../assets/images/team_images/teamF.png";
import MultiCarousel from "../components/crousel/MultiCarousel";
import "../assets/styles/about.scss";
import Team from "../components/team/Team";

const teams = [
  { teamPics: teamPicA, name: "Rina Bobner", Position: "Hr team lead" },
  { teamPics: teamPicB, name: "Rina Bobner", Position: "Product Manager" },
  { teamPics: teamPicC, name: "Rina Bobner", Position: "Sales Manager" },
  { teamPics: teamPicD, name: "Rina Bobner", Position: "Product Team lead" },
  { teamPics: teamPicE, name: "Rina Bobner", Position: "It Security Lead" },
  { teamPics: teamPicF, name: "Rina Bobner", Position: "My bob" },
];

export default function About() {
  return (
    <div className="container page-wrap about">
      <Hero
        showBtn={false}
        img={careerImg}
        title="Empowering others"
        para="Microsoft creates platforms and tools powered by AI to deliver innovative solutions that meet the evolving needs of our customers. The technology company is committed to making AI available broadly and doing so responsibly, with a mission to empower every person and every organization on the planet to achieve more."
      />
      <div className="row mt-4">
        <div className="col-12">
          <h2 className="mb-4">Make the most of life</h2>
          <p>
            With us, you’ll take risks, push boundaries, and grow more than you
            thought possible. And you won’t be alone on that journey. We have
            something special here; we put our employees at the center of
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
          <Button className="btn-white me-2">
            Work with us, send us your CV
          </Button>
          <Button className="btn-white">Talk to us</Button>
        </div>
        <div className="col-12 about-slider team-slider">
          <Team />
        </div>
      </div>
    </div>
  );
}
