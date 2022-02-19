import React from "react";
import { useTranslation } from "react-i18next";

const Card = ({ title, organization, rate, description }) => {
  const { t } = useTranslation();
  return (
    <div className="box btn-shadow">
      <div className="title_content sb-flex">
        <div className="title">
          <h2>{t(`${title}`)}</h2>
          <span>{organization}</span>
        </div>
        <div className="rate">
          <button className="btn-shadow">
            {rate == "leader.1" ? t(rate) : rate}
          </button>
        </div>
      </div>
      <hr />
      <p>{t(`${description}`)}</p>
    </div>
  );
};

export default Card;
