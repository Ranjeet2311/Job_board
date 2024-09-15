import "./footer.scss";
import logo from "../../assets/images/logo.svg";

export default function Footer() {
  return (
    <footer
      className="footer"
      id="footer-nav"
      aria-label="Footer"
      data-pagefind-ignore=""
    >
      <div className="container">
        <a className="" href="#">
          <img src={logo} alt="logo" />
        </a>
        <div className="footer-content">
          <div className="row">
            <div className="col-6 col-md-3 col-lg-3 mt-4 mt-lg-auto">
              <div className="footer-title">
                <a href="/products/">Dummy Product</a>
              </div>
              <div className="footer-links">
                <div>
                  <a href="#">Features Summary</a>
                </div>
                <div>
                  <a href="#">Whereabouts</a>
                </div>
                <div>
                  <a href="#">Meeting Rooms</a>
                </div>
                <div>
                  <a href="#">Dummy Text</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mt-4 mt-lg-auto">
              <div className="footer-title">
                <a href="/solutions/">Dummy Company</a>
              </div>
              <div className="footer-links">
                <div>
                  <a href="#">Work Planner</a>
                </div>
                <div>
                  <a href="#">Create an Account</a>
                </div>
                <div>
                  <a href="#">Subscription</a>
                </div>
                <div>
                  <a href="#">Dummy Text</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mt-4 mt-lg-auto">
              <div className="footer-title">
                <a href="/solutions/">Dummy Solutions</a>
              </div>
              <div className="footer-links">
                <div>
                  <a href="#">Work Planner</a>
                </div>
                <div>
                  <a href="#">Create an Account</a>
                </div>
                <div>
                  <a href="#">Subscription</a>
                </div>
                <div>
                  <a href="#">Dummy Text</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mt-4 mt-lg-auto">
              <div className="footer-title">
                <a href="/solutions/">Dummy Help and support</a>
              </div>
              <div className="footer-links">
                <div>
                  <a href="#">FAQ's</a>
                </div>
                <div>
                  <a href="#">Support & Guides</a>
                </div>
                <div>
                  <a href="#">Customer Portal</a>
                </div>
                <div>
                  <a href="#">Cookie Policy</a>
                </div>
                <div>
                  <a href="#">Privacy Policy</a>
                </div>
                <div>
                  <a href="#">Terms & Conditions</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
