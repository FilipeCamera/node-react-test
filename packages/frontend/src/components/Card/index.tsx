import api from "../../api";
import { CardBox, CardContainer } from "./styles";

interface CardProps {
  book?: any;
  logged?: boolean;
}
export function Card({ book, logged }: CardProps) {
  const handleRentBook = async () => {
    try {
      const res = await api.post("/copy/create", {
        copy_code: book.copy_code,
      });

      const copy = res.data;

      if (copy) {
        alert("livro alugado com sucesso!");
        return;
      }
    } catch (err: any) {
      alert(err.response.data);
    }
  };
  return (
    <CardContainer>
      <CardBox>
        <h4>{book.title}</h4>
        <h6>{book.author}</h6>
        <p>ISBN: {book.isbn}</p>
      </CardBox>
      <CardBox>
        <p>Código de cópia:</p>
        <h3>{book.copy_code}</h3>
        {!!logged && (
          <button onClick={() => handleRentBook()}>Alugar livro</button>
        )}
      </CardBox>
    </CardContainer>
  );
}
