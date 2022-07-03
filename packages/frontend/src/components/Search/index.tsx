import { SearchButton, SearchContainer, SearchInput } from "./styles";

export function Search() {
  return (
    <SearchContainer>
      <SearchInput placeholder="Pesquise pelo código do livro" />
      <SearchButton>Pesquisar</SearchButton>
    </SearchContainer>
  );
}
