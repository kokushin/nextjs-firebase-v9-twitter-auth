import React from "react";
import Image from "next/image";
import { useUser, login, logout } from "../../lib/auth";

export const Login: React.FC = () => {
  const user = useUser();

  const handleLogin = (): void => {
    login().catch((error) => console.error(error));
  };

  const handleLogout = (): void => {
    logout().catch((error) => console.error(error));
  };

  return (
    <div>
      {user !== null ? (
        <div>
          <h1>ログイン済み: {user.displayName}</h1>
          <div>
            <Image
              src={user.photoURL || ""}
              alt={user.displayName || ""}
              width={32}
              height={32}
            />
          </div>
          <button onClick={handleLogout}>ログアウト</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Twitterでログイン</button>
      )}
    </div>
  );
};
