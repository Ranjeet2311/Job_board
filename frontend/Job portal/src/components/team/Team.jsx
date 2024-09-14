import "./team.scss";
import teamPicA from "../../assets/images/team_images/teamA.png";
import teamPicB from "../../assets/images/team_images/teamB.png";
import teamPicC from "../../assets/images/team_images/teamC.png";
import teamPicD from "../../assets/images/team_images/teamD.png";
import teamPicE from "../../assets/images/team_images/teamE.png";
import teamPicF from "../../assets/images/team_images/teamF.png";
import MultiCarousel from "../crousel/MultiCarousel";

const teams = [
  { teamPics: teamPicA, name: "Rina Bobner", Position: "Hr team lead" },
  { teamPics: teamPicB, name: "Rina Bobner", Position: "Product Manager" },
  { teamPics: teamPicC, name: "Rina Bobner", Position: "Sales Manager" },
  { teamPics: teamPicD, name: "Rina Bobner", Position: "Product Team lead" },
  { teamPics: teamPicE, name: "Rina Bobner", Position: "It Security Lead" },
  { teamPics: teamPicF, name: "Rina Bobner", Position: "My bob" },
];

export default function Team() {
  return (
    <div>
      <h2 className="text-center"> Meet our team </h2>
      <MultiCarousel
        infinite={true}
        autoPlay={true}
        swipeable={true}
        draggable={false}
        showDots={false}
        autoPlaySpeed={3000}
        keyBoardControl={false}
        customTransition="all 1s"
        transitionDuration={500}
        minimumTouchDrag={0}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        containerClass="carousel-container mt-4"
      >
        {teams.map((img, i) => (
          <div className="slider_image" key={i}>
            <img className="company_img" src={img.teamPics} alt="team-image" />
            <p className="name">{img.name} </p>
            <hr className="my-0" />
            <p className="position">{img.Position} </p>
          </div>
        ))}
      </MultiCarousel>
    </div>
  );
}
