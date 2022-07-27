import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import Router from "next/router";
import axios, { AxiosError } from "axios";
import { notification } from "antd";

interface AuthContextData {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
  isLoading: boolean;
  setIsLoading?: (value: boolean) => void;
}

interface SignInData {
  email: string;
  password: string;
}

interface User {
  name: string;
  admin: boolean;
  bith: string;
  email: string;
  gender: string;
}

interface Children {
  children: ReactNode;
}
export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  destroyCookie(undefined, "nextAuth.token");
  Router.push("/");
}

export const AuthProvider = ({ children }: Children) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const isAuthenticated = !!user;

  const openNotificationWithIcon = (
    type: "open" | "success" | "info" | "warning" | "error",
    message: string
  ) => {
    notification[type]({
      message: message,
    });
  };

  const recoverMe = async () => {
    const { "nextAuth.token": token } = parseCookies();
    try {
      const response = await api.get("user/api/me", {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      });
      setUser(response.data);
    } catch (error) {
      signOut();
    }
  };

  useEffect(() => {
    const fetchMe = async () => {
      const { "nextAuth.token": token } = parseCookies();
      if (token) {
        await recoverMe();
        if (Router.pathname === "/") {
          Router.push("/home");
        }
      } else {
        Router.push("/");
      }
    };
    fetchMe();
  }, []);

  const signIn = async ({ email, password }: SignInData) => {
    setIsLoading(true);
    try {
      const response = await api.post("user/api/login", {
        email,
        password,
      });

      const expireToken = 60 * 60 * 1; // 1 hour

      setCookie(undefined, "nextAuth.token", response.data.token, {
        maxAge: expireToken,
      });
      setUser(user);
      Router.push("/home");
      setIsLoading(true);
      await recoverMe();
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status == 404) {
        setIsLoading(false);
        openNotificationWithIcon("error", "Usuário ou Senha inválida");
        console.log("houve um erro aí");
      } else {
        setIsLoading(false);
        openNotificationWithIcon(
          "error",
          "Houve um erro, contate o administrador"
        );
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
