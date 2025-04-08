import Image from "next/image";
import s from "./Header.module.css";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { AlignJustifyIcon } from "lucide-react";

export default function Header() {
  return (
    <div className="absolute top-0 w-full">
      <header className={s.bg}>
        <div className="container py-20 flex items-center">
          <Link href={"/"}>
            <Image
              alt="logo"
              height={66}
              width={200}
              src={"/logos/main.png"}
              className="py-4"
            />
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link href={"https://github.com/gurori/mpit-frontend"}>
              О проекте
            </Link>
            <Button variant={"outline"} className="px-8">
              <Link href={"/register"}>Регистрация</Link>
            </Button>
            <Button className="px-8">
              <Link href={"/login"}>Вход</Link>
            </Button>
          </div>
          <Menubar className="block md:hidden">
            <MenubarMenu>
              <MenubarTrigger>
                <AlignJustifyIcon className="pb-1" />
              </MenubarTrigger>
              <MenubarContent className="block md:hidden">
                <MenubarItem>
                  <Link className="w-full" href={"/login"}>
                    Вход
                  </Link>
                </MenubarItem>
                <MenubarItem>
                  <Link className="w-full" href={"/register"}>
                    Регистрация
                  </Link>
                </MenubarItem>
                <MenubarItem>
                  <Link className="w-full" href="/">
                    Главная
                  </Link>
                </MenubarItem>
                <MenubarItem>
                  <Link
                    className="w-full"
                    href="https://github.com/gurori/mpit-frontend"
                  >
                    Про сайт
                  </Link>
                </MenubarItem>
                {/* <MenubarItem>
                <Link className="w-full" href="/about">О нас</Link>
              </MenubarItem> */}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </header>
    </div>
  );
}
