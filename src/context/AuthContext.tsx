import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import { setCookie, parseCookies } from "nookies";
import Router from "next/router";

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

export const AuthProvider = ({ children }: Children) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const isAuthenticated = !!user;

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
    } catch (error) {}
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
      setIsLoading(true);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
