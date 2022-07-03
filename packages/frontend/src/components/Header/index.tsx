import { HeaderContainer } from "./styles";

interface HeaderProps {
  openModal: (e: any) => any;
}

export function Header({ openModal }: HeaderProps) {
  const token = localStorage.getItem("token");
  return (
    <HeaderContainer>
      <h5>Biblioteca Virtual</h5>
      <button onClick={openModal}>{token ? "Desconectar" : "Login"}</button>
    </HeaderContainer>
  );
}
