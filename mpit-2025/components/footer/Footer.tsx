import Image from "next/image";
import s from "./Footer.module.css";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className={cn(s.bg)}>
      <div className="container">
        <div>
          <Image alt="logo" src={"/logos/main.png"} height={66} width={200} />
          <p className="text-[#BDB6B6] w-[300px] pt-4">
            Онлайн-платформа, направленная на помощь участникам СВО, их семьям и
            переселенцам.
          </p>
        </div>
      </div>
    </footer>
  );
}
