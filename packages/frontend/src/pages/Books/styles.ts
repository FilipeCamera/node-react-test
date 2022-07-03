import styled from "styled-components";

export const CreateBookContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.6rem;

  h4 {
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    font-size: 2.2rem;
    margin: 0.4rem 0 2.8rem;
    color: #2c479a;
  }

  @media (max-width: 768px) {
    h4 {
      font-size: 1.8rem;
    }
  }
`;
