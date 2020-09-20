import React, { useState } from "react";
import styled, { css } from "styled-components";

export const Navbar = () => {
  const [burger, setBurger] = useState(false);

  const handleBurger = () => {
    setBurger(!burger);
  };

  return (
    <Nav>
      <Header>
        <Title> Portfolio </Title>
        <LinkList>
          <LinkItem className="link-item">
            <Aitem href="!#">Resume</Aitem>
          </LinkItem>
          <LinkItem className="link-item">
            <Aitem href="#aboutMe">About me</Aitem>
          </LinkItem>
          <LinkItem className="link-item">
            <Aitem href="#education">Education</Aitem>
          </LinkItem>
          <LinkItem className="link-item">
            <Aitem href="!#">Experiences</Aitem>
          </LinkItem>
          <LinkItem className="link-item">
            <Aitem href="#skills">Skills</Aitem>
          </LinkItem>
          <LinkItem className="link-item">
            <Aitem href="!#">Projects</Aitem>
          </LinkItem>
        </LinkList>
        <Burger onClick={(e) => handleBurger(e)}>
          <BurgerLine first activeFirst={burger ? true : false} />
          <BurgerLine second activeSecond={burger ? true : false} />
          <BurgerLine third activeThird={burger ? true : false} />
        </Burger>
      </Header>
    </Nav>
  );
};

const Nav = styled.nav`
  min-height: 8rem;
  background: linear-gradient(90deg, #1cb5e0 0%, #000851 100%);
`;

const Header = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;

  color: #ffffff;
`;

const LinkList = styled.ul`
  display: flex;

  width: 50%;
  justify-content: space-around;
  @media (max-width: 1024px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const LinkItem = styled.li`
  list-style-type: none;
`;

const Aitem = styled.a`
  text-decoration: none;
  color: white;
  cursor: pointer;
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
  background: white;
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
