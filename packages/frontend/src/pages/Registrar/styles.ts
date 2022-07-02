import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #1064ff, #2c479a);
`;

export const Box = styled.div`
  background: #fff;
  display: flex;
  width: 100%;
  max-width: 650px;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  border-radius: 2px;
  box-shadow: 10px 10px 25px 0px rgba(0, 0, 0, 0.35);

  h2 {
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    font-size: 2.4rem;
    color: #2c479a;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    width: 90%;
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
