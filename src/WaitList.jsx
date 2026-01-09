import React from "react";
import logo from "./assets/logo.png";
import line from "./assets/line.svg";

const WaitList = () => {
  return (
    <div className="wait-wrap">
      <div className="card-wrap">
        <img src={logo} alt="" width={120} />
        <form action="">
          <div className="line-wrap">
            <img src={line} alt="" className="line" />
            <div className="forms">
              <div className="inputss">
                <div className="input-wrap">
                  <label htmlFor="">First Name</label>
                  <input type="text" placeholder="Enter your first name" />
                </div>
                <div className="input-wrap">
                  <label htmlFor="">Last Name</label>
                  <input type="text" placeholder="Enter your last name" />
                </div>
              </div>
              <div className="input-wrap">
                <label htmlFor="">Phone Number</label>
                <input type="text" placeholder="Enter your phone number" />
              </div>
              <div className="input-wrap">
                <label htmlFor="">Email Address</label>
                <input type="text" placeholder="Enter your email address" />
              </div>
            </div>
          </div>
          <div className="btn">
            <button type="submit">Submit</button>
          </div>{" "}
        </form>
      </div>
    </div>
  );
};

export default WaitList;
