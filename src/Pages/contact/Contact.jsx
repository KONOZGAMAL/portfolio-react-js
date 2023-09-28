
import React from "react";
import "./Contact.css";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
export default function Contact() {
  return (
    <div className="Parent">
      <h1 className="section-title">LET'S TALK</h1>
      <div className="container">
        <div className="contact_detail">
         <ul className="contact-ul">
            <li>
              <span className="location"> <LocationOnIcon/></span>Bani Sweif, Cairo , Egypt 
            </li>
            <li>
            <span className="phone"><PhoneIcon /></span>
              <a href="tel:01114752381">
                <b className="Bb">01114752381</b>
              </a>
            </li>
            <li>
              <span className="envelope"> <MailIcon /> </span>
              <a href="mailto:konuzgamal12@gmail.com">
                <b className="Bb"> konuzgamal12@gmail.com</b>
              </a>
            </li>
          </ul> 
        </div>
        <div className="form">
          <form className="contFrm" method="POST">
            <div class="row">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="inptFld"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="inptFld"
                  required
                />
              </div>
              <div>
                <textarea
                  className="inptFld"
                  rows=""
                  cols=""
                  placeholder="How can we help you ? "
                  required
                ></textarea>
              </div>

              <div>
                <input
                  type="submit"
                  name="submit"
                  value="Send"
                  className="inptBtn"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
