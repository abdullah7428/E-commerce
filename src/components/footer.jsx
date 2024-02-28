import React from "react";
import style from "../modules/footer.module.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={style.footer} id="footer">
      <div className={style.map}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.211950711773!2dYOUR-LONGITUDE!3dYOUR-LATITUDE!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xYOUR-LATITUDE%YOUR-LONGITUDE%3A0xYOUR-LATITUDE%YOUR-LONGITUDE!2s89F2%2BG3F%20Madharian%20Wala%20Kalar!5e0!3m2!1sen!2spk!4v1646040764896!5m2!1sen!2spk"
          width="300"
          height="170"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className={style.contacts}>
        <div
          style={{
            height: "100%",
            height: "100%",
            display: " flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <h1>Contact Us:</h1>
          <hr />
          <h2>
            Phone No: <span>+923036875119</span>
          </h2>
          <h2>
            <a
              style={{ textDecoration: "none", color: "purple" }}
              href="mailto:hunny7428@gmail.com"
            >
              Email Us: hunny7428@gmail.com
            </a>
          </h2>
        </div>
        <div className={style.icons}>
          <p>
            <FaFacebook />
          </p>
          <p>
            <FaInstagram />
          </p>
          <p>
            <FaLinkedin />
          </p>
          <p>
            {" "}
            <FaTwitter />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
