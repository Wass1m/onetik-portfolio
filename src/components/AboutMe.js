import React from "react";
import styled, { css } from "styled-components";
import aboutPic from "../assets/about-me.jpg";

export const AboutMe = () => {
  return (
    <div className="about-me" id="aboutMe">
      <Title>About Me</Title>
      <AboutMeSec>
        <AboutPic>
          <img src={aboutPic} alt="about-me" />
        </AboutPic>
        <AboutText>
          <p>
            My name is <span>Wassim</span> a 24 years old Computer Science
            Engineer graduated from Higher National School of Computer Science
            (aka.
            <span>
              {" "}
              Ecole Nationale Superieur D'Informatique, ESI ex. INI){" "}
            </span>
            in Algiers, who has university education in Computer Science, IT and
            Computational Engineering, and is trained and significantly
            experienced in Software Engineering and Programming,
          </p>
          <br />
          <p>
            Software Engineering is a true passion for me, more than a field, I
            am well comfortable with programming and have set{" "}
            <span>React ( MERN stack precisly )</span> as my main stack for web
            development and <span>Flutter</span> for mobile development
          </p>
          <br />
          <p>
            {" "}
            I've done through my cursus sevral projects, it followed generally
            the Engineering field, from computational to software purposes.{" "}
          </p>
          <br />
          <p>
            One of my strengths is that I find my motivation in my passion for
            things and Software Engineering is one of them, right now I'm
            Freelancing into web and mobile development and I aspire to develop
            more and more.{" "}
          </p>
        </AboutText>
      </AboutMeSec>{" "}
    </div>
  );
};

const AboutMeSec = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1130px) {
    flex-wrap: wrap;
  }
  padding: 2rem 2rem;
`;

const AboutPic = styled.div`
  & > img {
    width: 35rem;
    box-shadow: 0px 0px 38px 0px rgba(255, 255, 255, 1);
  }
`;

const AboutText = styled.div`
  margin: 2rem 3rem;
  padding: 2rem 3rem;
  width: 50%;
  background: white;
  border-radius: 4px;
  opacity: 0.8;
  & span {
    font-family: "Arvo-Bold";
  }
`;

const Title = styled.h3`
  padding: 5rem 0;
  text-align: center;

  font-size: 2.5rem;
  font-family: "Arvo-Bold";
  color: white;
`;
