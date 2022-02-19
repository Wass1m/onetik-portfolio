import React from "react";
import "./Portfolio.css";

import PortfolioData from "./PortfolioData";
import PortCard from "./PortCard";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <section id="portfolio" className="portfolio">
      <div className="container mt80">
        <div className="heading text-center">
          <h4>{t("visit.1")}</h4>
          <h1>{t("myportfolio.1")}</h1>
        </div>
        <div className="content grid">
          {PortfolioData.map((item) => {
            return (
              <PortCard
                key={item.id}
                title={item.title}
                image={`${process.env.PUBLIC_URL + item.image}`}
                category={item.category}
                desc1={item.desc1}
                desc2={item.desc2}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
