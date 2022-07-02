import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "../../components";
import { Box, ButtonLink, Container } from "./styles";

export function Login() {
  const [codeAccess, setCodeAccess] = useState<string>("");
  return (
    <Container>
      <Box>
        <h2>Biblioteca</h2>
        <Input
          value={codeAccess}
          onChange={(e) => setCodeAccess(e.target.value)}
          placeholder="Digite seu CPF"
        />
        <Button title="Acessar" onClick={() => {}} />
        <ButtonLink to="/registrar">
          Não possui uma conta? Cadastre-se
        </ButtonLink>
      </Box>
    </Container>
  );
}
