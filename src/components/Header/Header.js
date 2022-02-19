import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import wassim from "../../assets/wassim.jpg";
import globe from "../../assets/icons/globe.svg";
import france from "../../assets/icons/france.svg";
import "./Header.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });

  const [burger, setBurger] = useState(false);

  const handleBurger = () => {
    setBurger(!burger);
  };

  const [activeLang, setLang] = useState("en");
  const [langModal, setLangModal] = useState(false);

  const handleLang = (lang) => {
    setLang(lang);
    i18next.changeLanguage(lang);
    setLangModal(false);
  };

  const handleLangModal = () => {
    setLangModal(!langModal);
  };

  const { t } = useTranslation();

  useEffect(() => {
    handleLang("fr");
  }, []);

  return (
    <Nav className="header">
      <Head>
        <Logo>
          <img src={wassim} alt="wassim" />
          <h1>Portfolio</h1>
          <div className="lang">
            <div onClick={() => handleLangModal()} className="current-flag">
              <img src={activeLang == "en-US" ? globe : france} alt="" />
              <span>{activeLang == "en-US" ? "English" : "Français"}</span>
            </div>
            <ul className={`flags ${langModal ? "active-flag" : ""}`}>
              <li onClick={() => handleLang("en-US")} className="flag">
                <img src={globe} alt="" />
                <span>English</span>
              </li>
              <li onClick={() => handleLang("fr")} className="flag second">
                <img src={france} alt="" />
                <span>Français</span>
              </li>
            </ul>
          </div>
        </Logo>
        <LinkList onClick={(e) => handleBurger(e)} mobile={burger}>
          <LinkItem className="link-item">
            <Aitem href="#landing">{t("home.1")}</Aitem>
          </LinkItem>
          <LinkItem className="link-item">
            <Aitem href="#resume">{t("resume.1")}</Aitem>
          </LinkItem>
          <LinkItem className="link-item">
            <Aitem href="#portfolio">{t("portfolio.1")}</Aitem>
          </LinkItem>
          <LinkItem className="link-item">
            <a
              href="https://drive.google.com/drive/u/1/folders/1S9kyoILCXlxfDJaYuoQCBYGpK9gK0UD1"
              target="_blank"
            >
              <button className="home-btn btn-shadow">{t("download.1")}</button>
            </a>
          </LinkItem>
        </LinkList>
        <Burger onClick={(e) => handleBurger(e)}>
          <BurgerLine first activeFirst={burger ? true : false} />
          <BurgerLine second activeSecond={burger ? true : false} />
          <BurgerLine third activeThird={burger ? true : false} />
        </Burger>
      </Head>
    </Nav>
  );
};

const Nav = styled.nav`
  height: 14vh;
  /* background: linear-gradient(90deg, #1cb5e0 0%, #000851 100%); */
  &.active {
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;
    background-color: #ecf0f3;
    box-shadow: -1px 11px 24px -11px rgba(0, 0, 0, 0.75);
    transition: 0.5s;
  }
`;

const Head = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }
  h1 {
    font-size: 2rem;
    color: #ffffff;

    margin-left: 10px;
    color: black;
  }
`;

const LinkList = styled.ul`
  display: flex;
  padding-top: 30px;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
    ${({ mobile }) =>
      mobile &&
      css`
        position: absolute;
        display: block;
        list-style: none;
        box-shadow: rgba(50, 50, 93, 0.23) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        left: 0;
        top: 0;
        transition: all 0.5s ease-in-out;
        width: 60%;
        height: 100vh;
        background-color: white;
        z-index: 888;
      `}
  }
`;

const LinkItem = styled.li`
  list-style-type: none;
  margin-left: 30px;

  @media (max-width: 768px) {
    width: 100%;
    transition: all 0.5s ease-in-out;
    text-transform: uppercase;
    line-height: 70px;
  }
`;

const Aitem = styled.a`
  transition: 0.5s;
  letter-spacing: 1px;
  cursor: pointer;
  :hover {
    color: #57c5e2;
  }
`;

const Burger = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

const BurgerLine = styled.div`
  height: 2px;
  margin: 5px 0;
  width: 1.5rem;
  background: #57c5e2;
  transition: all 0.6s ease-in-out;
  position: relative;
  ${({ first }) =>
    first &&
    css`
      transform-origin: left bottom;
    `}
  ${({ second }) =>
    second &&
    css`
      left: 0;
    `}
  ${({ third }) =>
    third &&
    css`
      transform-origin: left top;
    `}
  ${({ activeFirst }) =>
    activeFirst &&
    css`
      transform: rotate(38deg);
    `}
  ${({ activeSecond }) =>
    activeSecond &&
    css`
      left: -100%;
      opacity: 0;
    `}
  ${({ activeThird }) =>
    activeThird &&
    css`
      transform: rotate(-38deg);
    `}
`;
