import React from "react";
import styled, { css } from "styled-components";
import profileImage from "../assets/wassim.jpg";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div className="landing">
      <LandingSec>
        <ProfileImage src={profileImage} />
        <Card>
          <TitleCard>Computer Science Engineer</TitleCard>
          <SubTitleCard>Software, Web and Mobile Dev</SubTitleCard>
          <Skills>
            <SkillsItem>
              ReactJS{" "}
              <FontAwesomeIcon
                className="skill-icon"
                icon={faReact}
                size="1x"
              />
            </SkillsItem>
            <SkillsItem>Flutter</SkillsItem>
            <SkillsItem>Express</SkillsItem>
            <SkillsItem>
              NodeJS{" "}
              <FontAwesomeIcon className="skill-icon" icon={faNode} size="1x" />
            </SkillsItem>
            <SkillsItem>MongoDB</SkillsItem>
            <SkillsItem>Redux</SkillsItem>
          </Skills>
          <Dots />
          <Skills social>
            <a href="https://github.com/Wass1m">
              <FontAwesomeIcon
                className="social-link"
                icon={faGithub}
                size="5x"
              />
            </a>
            <a href="https://www.facebook.com/W4sSim/">
              <FontAwesomeIcon
                className="social-link"
                icon={faLinkedin}
                size="5x"
              />
            </a>
            <a href="https://www.linkedin.com/in/wassim-ghernaout/">
              <FontAwesomeIcon
                className="social-link"
                icon={faFacebook}
                size="5x"
              />
            </a>
          </Skills>
        </Card>
        <Column>
          <a href="../assets/CV_Wassim.pdf" download>
            <FontAwesomeIcon className="cv-file" icon={faFile} size="7x" />
          </a>
          <p>DOWNLOAD CV</p>
        </Column>
      </LandingSec>
    </div>
  );
};

const LandingSec = styled.section`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 18%;
  height: 18%;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  padding: 2rem 0;
  width: 70%;
  background: white;
  opacity: 0.8;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleCard = styled.h1`
  padding: 0 1rem;
  font-size: 3.5rem;
  margin: 1rem auto;
  text-align: center;
  font-family: "Arvo-Bold";
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SubTitleCard = styled.h3`
  text-align: center;
  padding: 0 1rem;
  margin: 1rem auto;
  font-size: 2rem;
  font-family: "Arvo-Bold";
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Dots = styled.hr`
  border: none;
  border-top: 5px black dotted;
  width: 70%;
`;

const Skills = styled.ul`
  display: flex;
  width: 50%;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  ${({ social }) =>
    social &&
    css`
      > a {
        padding: 0 2rem;
      }
    `}
`;

const SkillsItem = styled.li`
  list-style-type: none;
  font-family: "Arvo-Bold";
`;

const Column = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > p {
    font-size: 2rem;
    font-family: "Arvo-Bold";
    color: white;
  }
`;
