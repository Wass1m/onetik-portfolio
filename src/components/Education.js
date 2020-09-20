import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import diploma from "../assets/certificate.png";

export const Education = () => {
  return (
    <div className="education" id="education">
      <Title>Education</Title>
      <EducationSec>
        <EducationPic>
          <img src={diploma} alt="" />
        </EducationPic>

        <EducationText>
          I graduated with an <span>Engineering Degree</span> ( eq : Master ) in
          Computer Science Engineering, with a cursus in computation, and
          software engineering delivered by Ecole Nationale Superieure
          d'Informatique ( ESI ex INI), Algiers.
        </EducationText>
      </EducationSec>
    </div>
  );
};

const EducationSec = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

const EducationPic = styled.div`
  display: flex;
  width: 50%;

  > img {
    margin: auto;
    width: 10rem;
  }
`;

const EducationText = styled.div`
  margin: 2rem 3rem;
  padding: 2rem 3rem;
  width: 50%;
  background: white;
  opacity: 0.8;
  border-radius: 4px;
  & span {
    font-family: "Arvo-Bold";
  }
`;

const Title = styled.h3`
  margin: 2rem 0;
  text-align: center;
  padding: 2rem 0;
  font-size: 2.5rem;
  font-family: "Arvo-Bold";
  color: white;
`;
