import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { Card, Header, ModalLogin, Search } from "../../components";
import { Container } from "./styles";

export function Home() {
  const push = useNavigate();
  const [modal, setModal] = useState(false);
  const [books, setBooks] = useState<any[]>();
  const token = localStorage.getItem("token");

  const loadBooks = async () => {
    const res = await api.get("/book/list");

    const books = res.data;

    if (books) {
      setBooks(books);
    }
  };
  useEffect(() => {
    loadBooks();
  }, []);

  const handleHeader = () => {
    if (token) {
      localStorage.removeItem("token");
      push(0);
      return;
    }
    setModal(true);
  };
  return (
    <Container>
      <ModalLogin open={modal} onClose={() => setModal(false)} />
      <Header openModal={() => handleHeader()} />
      <Search />
      {!!books &&
        books.length !== 0 &&
        books.map((book) => (
          <Card book={book} key={book.id} logged={!!token} />
        ))}
      {!books && <h3>Nenhum livro encontrado</h3>}
    </Container>
  );
}
