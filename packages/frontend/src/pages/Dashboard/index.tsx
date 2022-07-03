import { useState } from "react";
import { Card } from "../../components";
import {
  BoxInfo,
  Container,
  MenuSide,
  Nav,
  NavMenu,
  NavSubMenu,
  NavWrap,
} from "./styles";

export function Dashboard() {
  const [stateMenu, setStateMenu] = useState({
    users: false,
    books: false,
    copies: false,
  });
  return (
    <Container>
      <MenuSide>
        <Nav>
          <h6>Biblioteca Virtual</h6>
          <NavWrap>
            <NavMenu>
              <button
                onClick={() =>
                  setStateMenu({ ...stateMenu, users: !stateMenu.users })
                }
              >
                Usuários
              </button>
              {stateMenu.users && (
                <NavSubMenu to="#">Listar usuários</NavSubMenu>
              )}
              {stateMenu.users && (
                <NavSubMenu to="#">Editar usuário</NavSubMenu>
              )}
              {stateMenu.users && (
                <NavSubMenu to="#">Remover usuário</NavSubMenu>
              )}
              <button
                onClick={() =>
                  setStateMenu({ ...stateMenu, books: !stateMenu.books })
                }
              >
                Livros
              </button>
              {stateMenu.books && (
                <NavSubMenu to="/admin/livros/cadastrar">
                  Cadastrar livro
                </NavSubMenu>
              )}
              {stateMenu.books && <NavSubMenu to="#">Listar livros</NavSubMenu>}
              {stateMenu.books && <NavSubMenu to="#">Editar livro</NavSubMenu>}
              {stateMenu.books && <NavSubMenu to="#">Remover livro</NavSubMenu>}
              <button
                onClick={() =>
                  setStateMenu({ ...stateMenu, copies: !stateMenu.copies })
                }
              >
                Cópias
              </button>
              {stateMenu.copies && (
                <NavSubMenu to="#">Cadastrar cópia</NavSubMenu>
              )}
              {stateMenu.copies && (
                <NavSubMenu to="#">Listar cópias</NavSubMenu>
              )}
              {stateMenu.copies && <NavSubMenu to="#">Editar cópia</NavSubMenu>}
              {stateMenu.copies && (
                <NavSubMenu to="#">Remover cópia</NavSubMenu>
              )}
            </NavMenu>
          </NavWrap>
        </Nav>
      </MenuSide>
      <BoxInfo>
        <h4>Livros mais alugados</h4>

        <h4>Livros com mais atrasos</h4>
      </BoxInfo>
    </Container>
  );
}
