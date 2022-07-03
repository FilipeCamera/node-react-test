import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { Button, Input } from "../../components";
import { CreateBookContainer } from "./styles";

export function CreateBook() {
  const push = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [isbn, setIsbn] = useState<string>("");
  const [copyCode, setCopyCode] = useState<string>("");

  const handleRegisterBook = async () => {
    try {
      const res = await api.post("/book/create", {
        title,
        author,
        isbn,
        copy_code: copyCode,
      });

      const book = res.data;

      if (book) {
        alert("Livro registrado com sucesso!");
        push("/admin/dashboard");
      }
    } catch (err: any) {
      alert(err.response.data);
    }
  };
  return (
    <CreateBookContainer>
      <h4>Cadastrar Livro</h4>
      <Input
        placeholder="Título do livro"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <Input
        placeholder="ISBN"
        value={isbn}
        maxLength={13}
        onChange={(e) => setIsbn(e.target.value)}
      />
      <Input
        placeholder="Código de cópia"
        value={copyCode}
        onChange={(e) => setCopyCode(e.target.value)}
      />

      <Button title="Cadastrar" onClick={() => handleRegisterBook()} />
    </CreateBookContainer>
  );
}
