import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: "menu box box";
  grid-template-columns: 1fr 2fr 2fr;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const MenuSide = styled.div`
  grid-area: menu;
  background: linear-gradient(90deg, #1064ff, #2c479a);
`;

export const Nav = styled.nav`
  display: flex;
  height: 100vh;
  flex-direction: column;

  h6 {
    text-align: center;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    font-size: 2.2rem;
    color: #fff;
    margin: 1.2rem 0 2.4rem;
  }

  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const NavWrap = styled.div`
  display: flex;
  width: 100%;
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  button {
    border: none;
    width: 100%;
    height: 42px;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    cursor: pointer;
    background: transparent;
    color: #fff;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;

export const NavSubMenu = styled(Link)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 42px;
  text-decoration: none;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.2);

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const BoxInfo = styled.div`
  grid-area: box;
  display: flex;
  flex-direction: column;
  padding: 1.6rem;

  h4 {
    font-family: "Open Sans", sans-serif;
    font-size: 1.8rem;
    font-weight: bold;
    margin: 0.5rem 0 1.6rem;
  }
`;

export const ButtonLink = styled(Link)``;
