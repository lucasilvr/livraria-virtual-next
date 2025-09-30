"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z
    .string()
    .nonempty("O campo e-mail é obrigatório")
    .email("Formato de e-mail inválido"),
  password: z
    .string()
    .nonempty("O campo senha é obrigatório")
    .min(6, "A senha deve ter no mínimo 6 caracteres"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export function useLoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function handleLogin(data: LoginFormInputs) {
    console.log("Simulando login com:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    router.push("/home");
  }

  return {
    register,
    handleSubmit: handleSubmit(handleLogin),
    errors,
    isSubmitting,
  };
}