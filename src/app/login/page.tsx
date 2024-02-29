"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <button
      onClick={async () => {
        const result = await signIn("credentials", {
          email: "sample@example.com",
          password: "password",
          redirect: false,
        });
        console.log(result);
        if (result?.ok) {
          router.push("/welcome");
        } else {
          throw Error(JSON.stringify(result));
        }
      }}
    >
      login
    </button>
  );
};
export default Page;
