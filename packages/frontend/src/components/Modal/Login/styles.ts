import { Link } from "react-router-dom";
import styled from "styled-components";

interface ModalLoginContainerProps {
  open: boolean;
}

export const ModalLoginContainer = styled.div<ModalLoginContainerProps>`
  display: ${(props) => (props.open === true ? "flex" : "none")};
  width: 100%;
  height: 100vh;
  position: fixed;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
  z-index: 10;
`;

export const ModalLoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: auto;
  background: #fff;
  padding: 2.4rem 1.6rem 1.6rem;
  border-radius: 2px;
  width: 100%;
  max-width: 500px;

  h5 {
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    font-size: 1.6rem;
    color: #2c479a;
    margin: 0.4rem 0 1.6rem;
  }

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const ButtonLink = styled(Link)`
  margin-top: 1rem;
  text-decoration: none;
  font-family: "Open Sans", sans-serif;
  font-size: 1.3rem;
  font-weight: 500;
  color: #2c479a;
  transition: color 0.2s;
  &:hover {
    color: #1064ff;
  }
`;

export const Close = styled.button`
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 1.6rem;
  color: #a2a2a2;
  height: 2.8rem;
  width: 2.8rem;
  border-radius: 1.4rem;
  border: none;
  position: absolute;
  top: 1rem;
  right: 1.6rem;
`;
