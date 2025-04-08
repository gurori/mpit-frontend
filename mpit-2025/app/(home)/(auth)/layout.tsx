import { type ReactNode } from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <div className="center min-h-screen">{children}</div>;
}
