import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(6, "Пароль должен иметь более 6 символов")
  .max(64, "Пароль должен иметь менее 64 символов");

export const loginSchema = z
  .string()
  .min(3, "Логин должен содержать минимум 3 символа")
  .max(50, "Логин не должен превышать 50 символов");

export const nameSchema = z
  .string()
  .min(2, "Введите не менее 2 символов")
  .max(50, "Введите не более 50 символов")
  .regex(
    /^[a-zA-Zа-яА-Я\s-]+$/,
    "ФИО должно содержать только буквы, пробелы и дефисы"
  );

export const emailSchema = z
  .string()
  .email("Некоректный адрес электронной почты");

export const roleSchema = z.string({ message: "Необходимо выбрать 1 роль" });

export const textSchema = z.string().min(10, "Введите не менее 10 символов");

export const dateSchema = z.string().min(7, "Введите не менее 7 символов");
