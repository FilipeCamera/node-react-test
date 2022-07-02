import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  width: 100%;
  border: none;
  background: #3b41e0;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  border-radius: 2px;
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  margin-top: 1.25rem;
  transition: background 0.2s;

  &:hover {
    background: #2c47a6;
  }
`;
