import { faCheck, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled, { css, keyframes } from "styled-components";
import frontend from "../assets/frontend.png";
import backend from "../assets/backend.png";

export const Skills = () => {
  return (
    <SkillsSection id="skills">
      <Title>Skills</Title>
      <SkillsList>
        <SkillCard>
          <ImageSkill>
            <img src={frontend} alt="" />
          </ImageSkill>
          <Title black>Front End</Title>
          <div className="row">
            <ul>
              <li>
                <FontAwesomeIcon className="checked-icon" icon={faCheck} />{" "}
                React JS
              </li>
              <li>
                <FontAwesomeIcon className="checked-icon" icon={faCheck} />{" "}
                Redux
              </li>
              <li>
                <FontAwesomeIcon className="checked-icon" icon={faCheck} />{" "}
                Javascript
              </li>
              <li>
                <FontAwesomeIcon className="checked-icon" icon={faCheck} /> HTML
              </li>
              <li>
                <FontAwesomeIcon className="checked-icon" icon={faCheck} /> CSS
              </li>
            </ul>
          </div>
        </SkillCard>

        <SkillCard>
          <ImageSkill>
            <img src={backend} alt="" />
          </ImageSkill>
          <Title black>Back End</Title>
          <div className="row">
            <ul>
              <li>
                <FontAwesomeIcon className="checked-icon" icon={faCheck} />{" "}
                NodeJS
              </li>
              <li>
                <FontAwesomeIcon className="checked-icon" icon={faCheck} />{" "}
                Firebase
              </li>
              <li>
                <FontAwesomeIcon className="checked-icon" icon={faCheck} />{" "}
                MongoDB
              </li>
              <li>
                <FontAwesomeIcon className="checked-icon" icon={faCheck} />{" "}
                Express
              </li>
            </ul>
          </div>
        </SkillCard>
        <SkillCard>
          <ImageSkill>
            <img src={frontend} alt="" />
          </ImageSkill>
          <Title black>Mobile</Title>
          <div className="row">
            <ul>
              <li>
                <FontAwesomeIcon className="checked-icon" icon={faCheck} />{" "}
                Flutter
              </li>
              <li>
                <FontAwesomeIcon className="checked-icon" icon={faCheck} />{" "}
                React Native (learn...)
              </li>
            </ul>
          </div>
        </SkillCard>
      </SkillsList>
    </SkillsSection>
  );
};

const SkillsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(90deg, #1cb5e0 0%, #000851 100%);
  height: 100%;
  padding: 2rem 0;
`;

const SkillsList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Title = styled.h3`
  padding: 5rem 0;
  text-align: center;
  font-size: 2.5rem;
  font-family: "Arvo-Bold";
  color: white;

  ${({ black }) =>
    black &&
    css`
      color: black;
      padding: 1rem 0;
      font-size: 1.5rem;
    `}
`;

const SkillCard = styled.div`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;

  flex-direction: column;
  position: relative;
  background: white;
  border-radius: 10px;
  opacity: 0.8;
  margin: 2rem 3rem;
  padding: 2rem 0;
  transition: box-shadow 0.8s ease;
  & > .row {
    display: flex;
    width: 100%;
    & > ul {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      text-align: center;
      & > li {
        list-style-type: none;
        font-size: 1.4rem;
      }
    }
  }
  &:hover {
    box-shadow: 0px 0px 38px 0px rgba(255, 255, 255, 1);
    animation: scalur 1s ease-in-out forwards;
    @keyframes scalur {
      from {
        transform: scale(1);
      }
      to {
        transform: scale(1.2);
      }
    }
  }
`;

const ImageSkill = styled.div`
  & > img {
    width: 5rem;
    height: 5rem;
    position: absolute;
    top: -2.5rem;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
`;
