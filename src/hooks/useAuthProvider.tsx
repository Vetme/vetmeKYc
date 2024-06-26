import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { UserI } from "../types";

const AuthContext = createContext<{
  loggedIn: boolean;
  user: UserI;
  saveAccessToken: (token: string) => void;
  saveVerificationToken: (token: string) => void;
  saveUser: (user: UserI) => void;
  clear: () => void;
}>({
  user: JSON.parse(localStorage.getItem("user") as any),
  loggedIn: !!localStorage.getItem("token"),
  saveAccessToken: () => {
    //
  },
  saveVerificationToken: () => {
    //
  },
  saveUser: () => {
    //
  },
  clear: () => {
    //
  },
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(() => {
    if (typeof window !== "undefined") {
      try {
        const localStorageTokens = JSON.parse(
          localStorage.getItem("user") || "null"
        );

        return localStorageTokens;
      } catch (e) {
        return [];
      }
    }
    return null;
  });

  const [token, setToken] = useState<any>(() => {
    if (typeof window !== "undefined") {
      try {
        const localStorageTokens = JSON.parse(
          localStorage.getItem("token") || "[]"
        );

        return localStorageTokens;
      } catch (e) {
        return null;
      }
    }
    return null;
  });

  const [verification_key, setVerificationToken] = useState<any>(() => {
    if (typeof window !== "undefined") {
      try {
        const localStorageKey = JSON.parse(
          localStorage.getItem("verification_key") || ""
        );

        return localStorageKey;
      } catch (e) {
        return "";
      }
    }
    return "";
  });

  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

  const saveAccessToken = (token: string) => {
    setToken(token);
    setLoggedIn(true);
    if (typeof window !== "undefined")
      localStorage.setItem("token", JSON.stringify(token));
  };

  const saveVerificationToken = (verification_key: string) => {
    setVerificationToken(verification_key);
    if (typeof window !== "undefined")
      localStorage.setItem("verification_key", verification_key);
  };

  const saveUser = (user: UserI) => {
    setUser(user);
    if (typeof window !== "undefined")
      localStorage.setItem("user", JSON.stringify(user));
  };
  const removeToken = () => {
    setToken("");
    if (typeof window !== "undefined") localStorage.removeItem("token");
  };

  const clear = () => {
    setToken("");
    setLoggedIn(false);
    setUser(null);
    if (typeof window !== "undefined") localStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{
        clear,
        loggedIn,
        saveAccessToken,
        saveVerificationToken,
        user,
        saveUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const {
    loggedIn,
    clear,
    saveAccessToken,
    user,
    saveVerificationToken,
    saveUser,
  } = useContext(AuthContext);

  return {
    loggedIn,
    user,
    clear,
    saveAccessToken,
    saveVerificationToken,
    saveUser,
  };
};
