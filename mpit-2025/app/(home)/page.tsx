import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/login"}>Вход</Link>
      <Link href={"/register"}>Регистрация</Link>
    </div>
  );
}
