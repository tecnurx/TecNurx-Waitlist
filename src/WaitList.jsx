import React, { useState } from "react";
import axios from "axios";
import logo from "./assets/logo.png";
import line from "./assets/line.svg";

const WaitList = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [modal, setModal] = useState({
    isOpen: false,
    type: "success", // or "error"
    message: "",
  });

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/waitlist`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      setModal({
        isOpen: true,
        type: "success",
        message: "Thank you! You've been added to the waitlist 🎉",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
      });
      setLoading(false);
    } catch (error) {
      const errorMsg =
        error.response?.data?.message ||
        "Something went wrong. Please try again later.";

      setModal({
        isOpen: true,
        type: "error",
        message: errorMsg,
      });
    }
  };

  const closeModal = () => {
    setModal({ isOpen: false, type: "", message: "" });
  };

  return (
    <div className="wait-wrap">
      <div className="card-wrap">
        {/* <img src={logo} alt="Logo" width={120} /> */}

        <div className="card">
          <div className="welcome">
            <h1>
              Join the <span>Waitlist</span>
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="form">
            <div className="two-form-group">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="btn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal */}
      {modal.isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon">
              {modal.type === "success" ? "🎉" : "⚠️"}
            </div>
            <h3 className={modal.type === "success" ? "success" : "error"}>
              {modal.type === "success" ? "Success!" : "Oops..."}
            </h3>
            <p>{modal.message}</p>
            <button className="modal-close-btn" onClick={closeModal}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WaitList;
