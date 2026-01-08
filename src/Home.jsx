import { Link } from "react-router-dom";
import hero from "./assets/hero.svg";
import rate from "./assets/rate.svg";
import logo from "./assets/logo.png";

import mail from "./assets/mail.svg";
import link from "./assets/link.svg";
import ig from "./assets/ig.svg";
import x from "./assets/x.svg";
import what from "./assets/what.svg";

const Home = () => {
  return (
    <div style={{ height: "100vh", background: "#f4f4f4" }} className="wrap">
      <nav className="navbar">
        <img src={logo} alt="" width={120} />
      </nav>
      <main className="hero-section">
        <div className="hero-content">
          <div className="hero-texts">
            <img src={rate} alt="rate" />
            <h1>
              A New Era of <br />
              <span>Gadget Repair </span> <br /> Starts Here
            </h1>
            <p>
              At TecNurx, we’re redefining convenience with expert diagnosis,
              flexible payments, doorstep pickup & delivery, and expert repair
              services.
            </p>
            <div className="hero-btns">
              <Link to="/waitlist">JOIN THE WAITLIST</Link>
            </div>
          </div>
          <div className="socials">
            <a href="mailto:tecnurx@gmail.com" target="_blank">
              <img src={mail} alt="" />
            </a>
            <a href="https://www.linkedin.com/company/tecnurx/" target="_blank">
              <img src={link} alt="" />
            </a>
            <a href="https://www.instagram.com/tecnurx/" target="_blank">
              <img src={ig} alt="" />
            </a>
            <a href="https://x.com/TecNurx" target="_blank">
              <img src={x} alt="" />
            </a>
            {/* <a href="" target="_blank">
              <img src={what} alt="" />
            </a> */}
          </div>
        </div>
        <img src={hero} alt="Hero Image" className="hero-image" />
      </main>
    </div>
  );
};

export default Home;
