import React from "react";
import "./Resume.css";
import ResumeData from "./ResumeData";
import Card from "./Card";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Resume = () => {
  const { t } = useTranslation();
  return (
    <section id="resume" className="resume">
      <div className="container mt120">
        <div className="heading text-center">
          <h4>{t("years.1")}</h4>
          <h1>{t("myresume.1")}</h1>
        </div>
        <div className="resume-content mt40 sb-flex">
          <div className="left">
            <div className="heading">
              <h4>2015-2022</h4>
              <h1>{t("education.1")}</h1>
            </div>
            <div className="content">
              {ResumeData.map((data) => {
                return data.category == "education" ? (
                  <Card
                    key={data.id}
                    title={data.title}
                    organization={data.organzation}
                    description={data.desc}
                    rate={data.rate}
                  />
                ) : (
                  <></>
                );
              })}
            </div>
          </div>
          <div className="left">
            <div className="heading">
              <h4>2020-2022</h4>
              <h1>{t("professional.1")}</h1>
            </div>
            <div className="content">
              {ResumeData.map((data) => {
                return data.category == "professional" ? (
                  <Card
                    key={data.id}
                    title={data.title}
                    organization={data.organzation}
                    description={data.desc}
                    rate={data.rate}
                  />
                ) : (
                  <></>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
