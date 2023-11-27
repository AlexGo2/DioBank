export type DioLogin = {
  userName: string | undefined;
  password: string | undefined;
};

export const login = ({ userName, password }: DioLogin): any => {
  if (userName && password) {
    alert(`Bem vindo ao Dio Bank, ${userName}`);
  }
  throw new Error("Usuário e senha não correspondem");
};
