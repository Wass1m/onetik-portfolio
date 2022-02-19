import React from "react";
import { useTranslation } from "react-i18next";
import wassim from "../assets/wassim.jpg";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer>
        <div className="conatiner text-center mt80">
          <div className="footer-img">
            <img src={wassim} alt="" />
          </div>
          <p>© 2022. Wassim Ghernaout.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
