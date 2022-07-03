import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  padding: 1.6rem;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  margin: 1.8rem 2.4rem;
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    margin: 2rem 1.8rem;
  }
`;

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Open Sans", sans-serif;

  h4 {
    font-size: 2.2rem;
    font-weight: bold;
  }

  h6 {
    font-size: 1.6rem;
    font-weight: 500;
  }

  p {
    font-size: 1.4rem;
    font-weight: 400;
  }

  h3 {
    font-size: 2rem;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    h4 {
      font-size: 1.8rem;
      font-weight: bold;
    }

    h6 {
      font-size: 1.4rem;
      font-weight: 500;
    }

    p {
      font-size: 1.2rem;
      font-weight: 400;
    }

    h3 {
      font-size: 1.6rem;
      font-weight: bold;
    }
  }
`;
