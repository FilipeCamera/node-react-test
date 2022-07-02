import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "../../components";
import { Box, ButtonLink, Container } from "./styles";

export function Registrar() {
  const [codeAccess, setCodeAccess] = useState<string>("");
  return (
    <Container>
      <Box>
        <h2>Biblioteca</h2>
        <Input
          value={codeAccess}
          onChange={(e) => setCodeAccess(e.target.value)}
          placeholder="Nome Completo"
        />
        <Input
          value={codeAccess}
          onChange={(e) => setCodeAccess(e.target.value)}
          placeholder="CPF"
        />
        <Input
          value={codeAccess}
          onChange={(e) => setCodeAccess(e.target.value)}
          placeholder="Data de Nascimento"
        />
        <Input
          value={codeAccess}
          onChange={(e) => setCodeAccess(e.target.value)}
          placeholder="CEP"
        />
        <Input
          value={codeAccess}
          onChange={(e) => setCodeAccess(e.target.value)}
          placeholder="Endereço"
        />
        <Input
          value={codeAccess}
          onChange={(e) => setCodeAccess(e.target.value)}
          placeholder="Cidade"
        />
        <Input
          value={codeAccess}
          onChange={(e) => setCodeAccess(e.target.value)}
          placeholder="Estado"
        />
        <Button title="Acessar" onClick={() => {}} />
        <ButtonLink to="/">Já tem um conta? Efetue o login</ButtonLink>
      </Box>
    </Container>
  );
}
