import React from "react";
import wassimnobg from "../../assets/wassimnobg.png";
import "./Landing.css";
import { Typewriter } from "react-simple-typewriter";
import fiverr from "../../assets/icons/fiverr.svg";
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkeding.png";
import flutter from "../../assets/icons/flutter.svg";
import reactjs from "../../assets/icons/reactjs.png";
import nodejs from "../../assets/icons/nodejs.png";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

export const Landing = () => {
  const { t } = useTranslation();

  return (
    <section id="landing" className="landing" ta>
      <div className="container flex mt80">
        <div className="left mt80">
          <h3>{t("welcome.1")}</h3>
          <h1>
            {t("hi.1")} <span>{t("wassim.1")}</span>
          </h1>
          <h2>
            {t("aa.1")}
            <span>
              <Typewriter
                words={[` ${t("reactdev.1")}.`, ` ${t("engineer.1")}.`]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p>
            {t("intro.1")}
            {/* I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I’m not
            adding motion just to spruce things up, but doing it in ways that. */}
          </p>
          <div className="landing-buttons sb-flex">
            <div className="btn-col">
              <h4>{t("findme.1")}</h4>
              <div className="buttons-list">
                <a href="https://www.linkedin.com/in/wassimght" target="_blank">
                  <button className="btn-shadow ">
                    <img src={linkedin} alt="" />
                  </button>
                </a>
                <a href="https://github.com/Wass1m" target="_blank">
                  <button className="btn-shadow">
                    <img src={github} alt="" />
                  </button>
                </a>

                <a href="https://www.fiverr.com/onetikdz" target="_blank">
                  <button className="btn-shadow fiverr">
                    <img src={fiverr} alt="" />
                  </button>
                </a>
              </div>
            </div>
            <div className="btn-col">
              <h4>{t("skills.1")}</h4>
              <div className="buttons-list">
                <a href="https://reactjs.org/" target="_blank">
                  <button className="btn-shadow">
                    <img src={reactjs} alt="" />
                  </button>
                </a>
                <a href="https://nodejs.org/en/" target="_blank">
                  <button className="btn-shadow">
                    <img src={nodejs} alt="" />
                  </button>
                </a>
                <a href="https://flutter.dev/" target="_blank">
                  <button className="btn-shadow">
                    <img src={flutter} alt="" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right-img">
            <img src={wassimnobg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
