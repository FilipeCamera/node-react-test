import { useState } from "react";
import api from "../../../api";
import { Button } from "../../Button";
import { Input } from "../../Input";
import {
  ButtonLink,
  Close,
  ModalLoginBox,
  ModalLoginContainer,
} from "./styles";

interface ModalLoginProps {
  open: boolean;
  onClose: () => any;
}
export function ModalLogin({ open, onClose }: ModalLoginProps) {
  const [cpf, setCpf] = useState<string>("");

  const handleLogin = async () => {
    if (cpf.length === 0) {
      alert("Campo Vazio");
      return;
    }
    try {
      const res = await api.post("/login", {
        cpf,
      });

      const { token } = res.data;

      if (token) {
        localStorage.setItem("token", token);
        onClose();
      }
    } catch (err: any) {
      alert(err.response.data);
    }
  };
  return (
    <ModalLoginContainer open={open}>
      <ModalLoginBox>
        <Close onClick={onClose}>X</Close>
        <h5>Login</h5>
        <Input
          maxLength={11}
          value={cpf}
          placeholder="Digite seu CPF"
          onChange={(e) => setCpf(e.target.value)}
        />
        <Button title="Acessar" onClick={() => handleLogin()} />
        <ButtonLink to="/registrar">
          Não possui uma conta? Cadastre-se
        </ButtonLink>
      </ModalLoginBox>
    </ModalLoginContainer>
  );
}
