import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const PortCard = ({ image, title, category, desc1, desc2 }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    console.log("khra");
  };

  const { t } = useTranslation();

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className="box btn-shadow" onClick={() => toggleModal()}>
        <div className="img">
          <img src={image} alt="" />
        </div>

        <div className="category sb-flex">
          <span>{t(category)}</span>
          <span> {t("more.1")} </span>
        </div>
        <div className="title">
          <h2>{t(title)}</h2>
          <a href="#popup" className="arrow">
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content sb-flex">
              <div className="modal-img left">
                <img src={image} alt="" />
              </div>
              <div className="modal-text left">
                <span>{t(category)}</span>
                <h1>{t(title)}</h1>
                <p>{t(desc1)}</p>
                <p>{t(desc2)}</p>
                {title == "portfolio2.1" ? (
                  <a
                    className="trivia"
                    href="https://play.google.com/store/apps/details?id=com.bible_truth_trivia"
                    target="_blank"
                  >
                    Quiz Trivia
                  </a>
                ) : (
                  ""
                )}
                <button
                  onClick={() => toggleModal()}
                  className="close-modal btn-shadow"
                >
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortCard;
