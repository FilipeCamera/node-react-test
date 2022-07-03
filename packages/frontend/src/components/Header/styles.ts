import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 32px;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  background: #1064ff;

  h5 {
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    font-size: 2.2rem;
    color: #fff;
  }

  button {
    border: none;
    background: rgba(255, 255, 255, 0.3);
    height: 2.8rem;
    width: 6.4rem;
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
    color: #fff;
    border-radius: 2px;
    transition: background 0.2s;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }

  @media (max-width: 768px) {
    h5 {
      font-size: 1.8rem;
    }
    padding: 0 16px;
  }
`;
