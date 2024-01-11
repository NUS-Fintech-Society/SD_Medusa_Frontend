"use client";

import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type UserInfo = {
  username: string | null;
  email: string | null;
  userId: string | null;
};

interface ContextProps {
  userInfo: UserInfo;
  setUserInfo: Dispatch<SetStateAction<UserInfo>>;
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const initialState = {
  username: null,
  email: null,
  userId: null,
};

const AuthContext = createContext<ContextProps>({
  userInfo: initialState,
  setUserInfo: (): UserInfo => initialState,
  isLoggedIn: false,
  setIsLoggedIn: (): boolean => false,
});

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userInfo, setUserInfo] = useState<UserInfo>(initialState);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <AuthContext.Provider
      value={{ userInfo, setUserInfo, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
