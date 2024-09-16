import PropTypes from "prop-types";
import Button from "../buttons/Button";

Hero.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
  showBtn: PropTypes.bool.isRequired,
};

export default function Hero({ img, title, para, showBtn }) {
  return (
    <div className="row hero">
      <div className="col-12 col-md-6">
        <h1> {title} </h1>
        <p className="desc"> {para} </p>
        {showBtn && (
          <div className="row justify-content-start">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <Button
                style={{
                  padding: "12px 20px",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
                isLInk={true}
                to="/login"
                className="w-100 btn-blue"
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
                className="w-100 btn-white"
                to="/jobs"
              >
                Start Serching
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="col-12 col-md-6 hero_img my-4 my-md-0">
        <img src={img} alt="hero image" />
      </div>
    </div>
  );
}
