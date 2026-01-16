import { Link } from "react-router-dom";
import hero from "./assets/hero.svg";
import rate from "./assets/rate.svg";
import logo from "./assets/logo.png";

import mail from "./assets/mail.svg";
import link from "./assets/link.svg";
import ig from "./assets/ig.svg";
import x from "./assets/x.svg";
import what from "./assets/what.svg";
import {
  FaLinkedin,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { ImMail3 } from "react-icons/im";

const Home = () => {
  return (
    <div style={{ height: "100vh", background: "#f4f4f4" }} className="wrap">
      <div className="nav-wrap">
        <nav className="navbar">
          <Link to="/">
            <img src={logo} alt="logo" width={120} />
          </Link>
        </nav>
      </div>
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
              <Link to="/waitlist">Join the Waitlist</Link>
            </div>
          </div>
          <div className="socials">
            <a href="mailto:tecnurx@gmail.com" target="_blank">
             <ImMail3 className="mailicon" />
            </a>
            <a href="https://www.linkedin.com/company/tecnurx/" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/tecnurx/" target="_blank">
              <FaSquareInstagram />
            </a>
            <a href="https://x.com/TecNurx" target="_blank">
              <FaSquareXTwitter />
            </a>
          </div>
        </div>
        <img src={hero} alt="Hero Image" className="hero-image" />
        <div className="socials socials-mobile">
          <a href="mailto:tecnurx@gmail.com" target="_blank">
           <ImMail3 className="mailicon" />
          </a>
          <a href="https://www.linkedin.com/company/tecnurx/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/tecnurx/" target="_blank">
            <FaSquareInstagram />
          </a>
          <a href="https://x.com/TecNurx" target="_blank">
            <FaSquareXTwitter />
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
