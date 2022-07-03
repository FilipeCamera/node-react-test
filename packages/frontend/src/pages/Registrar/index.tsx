import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { Button, Input } from "../../components";
import { Box, ButtonLink, Container } from "./styles";

export function Registrar() {
  const push = useNavigate();
  const [fullname, setFullname] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [birthdate, setBirthdate] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [uf, setUf] = useState<string>("");

  const handleRegister = async () => {
    try {
      const res = await api.post("/user/create", {
        fullname,
        cpf,
        birthdate,
        cep,
        address,
        city,
        uf,
      });

      const user = res.data;

      if (user) {
        alert("Usuario cadastrado com sucesso!");
        push("/");
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
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          placeholder="Nome Completo"
        />
        <Input
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          placeholder="CPF"
          maxLength={11}
        />
        <Input
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          placeholder="Data de Nascimento"
          type="date"
        />
        <Input
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          placeholder="CEP"
          maxLength={8}
        />
        <Input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Endereço"
        />
        <Input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Cidade"
        />
        <Input
          value={uf}
          onChange={(e) => setUf(e.target.value)}
          maxLength={2}
          placeholder="Estado - UF"
        />
        <Button title="Registrar" onClick={() => handleRegister()} />
        <ButtonLink to="/">Já tem um conta? Efetue o login</ButtonLink>
      </Box>
    </Container>
  );
}
