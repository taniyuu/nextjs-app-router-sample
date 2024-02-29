"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        signOut({ redirect: false });
        router.refresh();
      }}
    >
      logout
    </button>
  );
};
export default LogoutButton;
