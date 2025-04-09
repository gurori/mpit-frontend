"use client";

import { Button } from "@/components/ui/button";
import apiFetch from "@/lib/apiFetch";
import type { IApiErrorMessage } from "@/lib/types/IApiErrorMessage";
import { dateSchema, nameSchema, textSchema } from "@/lib/zod-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function InfoForm({token}: Readonly<{token: string}>) {
  const { push } = useRouter();
  const [formError, setFormError] = useState("");
  const userSchema = z.object({
    name: nameSchema,
    date: dateSchema,
    need: textSchema,
  });
  type TypeFormData = z.infer<typeof userSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeFormData>({
    resolver: zodResolver(userSchema),
  });


  const onSubmit = async (data: TypeFormData) => {
    try {
      const res = await apiFetch("/users/info", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);

      if (res.ok) {
        push("/chat");
      } else {
        const apiError: IApiErrorMessage = await res.json();
        setFormError(apiError.detail);
      }
    } catch {
      setFormError("Ошибка. Пожалуйста повторите пойзже.");
    }
  };
  return (
    <form
      className="form-auth grid gap-2 mt-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2>Анкета</h2>
      <p className="text-red-400">{formError}</p>
      <input
        {...register("name")}
        className="auth"
        placeholder="ФИО участника СВО"
        type="text"
      />
      <div>
        {errors.name && <p className="text-red-400">{errors.name.message}</p>}
      </div>
      <input
        {...register("date")}
        className="auth"
        placeholder="Дата рождения"
        type="text"
      />
      <div>
        {errors.date && (
          <p className="text-red-400">{errors.date.message}</p>
        )}
      </div>
      <textarea
        {...register("need")}
        className="auth"
        placeholder="Опишите Вашу проблему"
      />
      <div>
        {errors.need && (
          <p className="text-red-400">{errors.need.message}</p>
        )}
      </div>
      <Button className="place-self-start mb-4" type="submit">
        Отпрваить
      </Button>
    </form>
  );
}
