import { Button } from "@/components/ui/button";
import VerticalLine from "@/components/ui/VerticalLine";
import Image from "next/image";
import Link from "next/link";
import s from "./Home.module.css";

export default function Home() {
  return (
    <main className="relative">
      <section className="image-container">
        {/* <img
          src={"/images/hero.png"}
          alt="hero"
          className="mt-[100px] xl:-mt-24 hidden md:block"
        /> */}
        <img
          src={"/images/hero-lg.png"}
          alt="hero"
          className="mt-[100px] xl:-mt-24 block md:hidden"
        />
        <div className="container">
          <div className="absolute top-2/6 w-[500px]">
            <h1>
              Ты выполнил
              <br />
              свой долг.
            </h1>
            <p className="text-md md:text-2xl">
              Теперь мы рядом, чтобы ты
              <br />
              вернулся к жизни.
            </p>
            <Link href={"/register"} className="">
              <Button
                style={{ width: 218 }}
                className="bg-[#F8D451] hover:bg-[#F8D451] text-black md:mt-8 lg:py-4"
              >
                Начать
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="w-full">
          <div className="flex gap-6 my-8">
            <VerticalLine className="h-[60px]" />
            <h2>С чего начать</h2>
          </div>
          <div className="flex flex-wrap gap-1 w-full center">
            <div className={s.card}>
              <img src="/images/main-1.png" />
              <p>
                Помощь в любом проявлении, к каждому найдем индивидуальный
                подход. Бесплатные вебинары и онлайн-тренинги.
              </p>
            </div>
            <div className={s.card}>
              <img src="/images/main-2.png" />
              <p>
                Поможем не только найти достойную работу с уважением к вашему
                опыту, но и предоставим всю необходимую вам информацию.
              </p>
            </div>
            <div className={s.card}>
              <img src="/images/main-3.png" />
              <p>
                Чаты и форумы для общения, обмена опытом. Мы все здесь как одна
                большая семья - поможем всем, кто нуждается в помощи.
              </p>
            </div>
            <div className={s.card}>
              <img src="/images/main-4.png" />
              <p>
                Привлечение квалифицированных консультантов (юристы, психологи,
                социальные работники).
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
