import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  border: 2px solid #1064ff;
  border-radius: 5px;
  height: 3.8rem;
  margin: 3.2rem auto;
`;

export const SearchInput = styled.input`
  display: flex;
  flex: 1;
  border: none;
  height: 100%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding-left: 0.8rem;
  font-family: "Open Sans", sans-serif;
  font-size: 1.4rem;
  font-weight: medium;
`;

export const SearchButton = styled.button`
  background: #1064ff;
  height: 100%;
  border: none;
  padding: 0 1.6rem;
  font-family: "Open Sans", sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  color: #fff;
  transition: background 0.2s;

  &:hover {
    background: #0b56de;
  }
`;
