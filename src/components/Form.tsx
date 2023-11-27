import { useEffect, useState } from "react";
import { Input, Box, Center, Button } from "@chakra-ui/react";
import { login } from "../services/login";
import Btn from "./Btn";
import AlertErr from "./AlertErr";

const Form = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState<string>("");

  const setUserNameState = (e: any) => {
    setUserName(e.target.value);
  };

  const setPasswordState = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await login({ userName, password });
      setError("");
    } catch (error: any) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("");
      }
    }
  };

  return (
    <>
      <Box minHeight="100vh" backgroundColor="#1e192c" padding="25px">
        <Box bg="#ffffff" borderRadius="25px" padding="15px">
          <Center>
            <h1>Fazer login</h1>
          </Center>
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Nome de usuário"
              type="text"
              onChange={setUserNameState}
            />
            <Input
              placeholder="senha"
              type="password"
              onChange={setPasswordState}
            />
            {error && (
              <AlertErr
                title={"Oops!"}
                description={"Usuário ou senha não combinam"}
              />
            )}
            <Btn type="submit" name="Entrar" />
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Form;
