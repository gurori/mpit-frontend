"use client";

import { emailSchema, passwordSchema } from "@/lib/zod-schemas";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import apiFetch from "@/lib/apiFetch";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { setCookies } from "@/app/actions";

export default function LoginFrom() {
  const { push } = useRouter();
  const [formError, setFormError] = useState("");
  const userSchema = z.object({
    login: emailSchema,
    password: passwordSchema,
  });
  type TypeFormData = z.infer<typeof userSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeFormData>({ resolver: zodResolver(userSchema) });

  const onSubmit = async (data: TypeFormData) => {
    try {
      const res = await apiFetch("/users/login", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        setCookies("auth", await res.text(), {
          secure: true,
          httpOnly: true,
          sameSite: "strict",
        });
        push("/profile");
      }
    } catch {
      setFormError("Ошибка. Пожалуйста повторите пойзже.");
    }
  };

  return (
    <form className="grid gap-2 mt-6" onSubmit={handleSubmit(onSubmit)}>
      <p className="text-red-400">{formError}</p>
      <input
        {...register("login")}
        className="gray"
        placeholder="Почта"
        type="text"
      />
      <div>
        {errors.login && <p className="text-red-400">{errors.login.message}</p>}
      </div>
      <input
        {...register("password")}
        className="gray"
        placeholder="Пароль"
        type="password"
      />
      <div>
        {errors.password && (
          <p className="text-red-400">{errors.password.message}</p>
        )}
      </div>
      <Button className="place-self-start mb-4" type="submit">
        Продолжить
      </Button>
    </form>
  );
}
