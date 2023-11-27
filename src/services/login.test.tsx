import { login, DioLogin } from "./login";

describe("Teste da função de login", () => {
  // test("Deve fazer login com sucesso", () => {
  //   const mockShowAlert = jest.fn(window.alert);

  //   const user: DioLogin = {
  //     userName: "usuario",
  //     password: "senha",
  //   };

  //   expect(() => login(user)).not.toThrow();
  //   expect(mockShowAlert).toHaveBeenCalledWith(
  //     "Bem vindo ao Dio Bank, usuario"
  //   );
  // });

  test("Deve lançar um erro quando userName ou password não forem fornecidos", () => {
    const userWithoutUserName: DioLogin = {
      userName: undefined,
      password: "senha",
    };

    const userWithoutPassword: DioLogin = {
      userName: "usuario",
      password: undefined,
    };

    expect(() => login(userWithoutUserName)).toThrowError(
      "Usuário e senha não correspondem"
    );
    expect(() => login(userWithoutPassword)).toThrowError(
      "Usuário e senha não correspondem"
    );
  });
});
