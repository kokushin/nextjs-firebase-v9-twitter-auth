import React from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import {
  User,
  getAuth,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  TwitterAuthProvider,
} from "firebase/auth";

import { app } from "./firebase";

type UserState = User | null;

// 認証したユーザーの情報を保持する
// ログイン中はUserオブジェクトが格納され、未ログイン時はnullが返却される
const userState = atom<UserState>({
  key: "userState",
  default: null,
  dangerouslyAllowMutability: true,
});

export const login = (): Promise<void> => {
  const provider = new TwitterAuthProvider();
  const auth = getAuth(app);
  return signInWithRedirect(auth, provider);
};

export const logout = (): Promise<void> => {
  const auth = getAuth(app);
  return signOut(auth);
};

export const useAuth = (): boolean => {
  const [isLoading, setIsLoading] = React.useState(true);
  const setUser = useSetRecoilState(userState);

  React.useEffect(() => {
    const auth = getAuth(app);
    return onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });
  }, [setUser]);

  return isLoading;
};

export const useUser = (): UserState => {
  return useRecoilValue(userState);
};
