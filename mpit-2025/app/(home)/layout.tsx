import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { type ReactNode } from "react";

export default function HomeLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div>
      {children}
      <Header />
      <Footer />
    </div>
  );
}
