import { ReactNode } from "react";

export default function Card({ children }: Readonly<{ children: ReactNode }>) {
  return <div>{children}</div>;
}
