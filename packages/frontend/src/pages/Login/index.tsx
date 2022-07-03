import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { Button, Input } from "../../components";
import { Box, Container } from "./styles";

export function Login() {
  const push = useNavigate();
  const [codeAccess, setCodeAccess] = useState<string>("");

  const handleLogin = async () => {
    try {
      const res = await api.post("/login", {
        code_access: codeAccess,
      });

      const { token } = res.data;

      if (token) {
        localStorage.setItem("token", token);
        push("/admin/dashboard");
      }
    } catch (err: any) {
      alert(err.response.data);
    }
  };
  return (
    <Container>
      <Box>
        <h2>Biblioteca</h2>
        <Input
          value={codeAccess}
          onChange={(e) => setCodeAccess(e.target.value)}
          placeholder="Código de acesso"
        />
        <Button title="Acessar" onClick={() => handleLogin()} />
      </Box>
    </Container>
  );
}
