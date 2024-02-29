import { getServerSession } from "next-auth";
import LogoutButton from "./_parts/LogoutButton";

const Page = async () => {
  const session = await getServerSession();
  return (
    <>
      <div>
        {"session is "}
        <span>{session ? JSON.stringify(session.user) : "null"}</span>
      </div>
      <div>{session && <LogoutButton />}</div>
    </>
  );
};
export default Page;
