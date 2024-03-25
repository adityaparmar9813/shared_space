"use client";

import { SubmitHandler, useForm } from "react-hook-form";

type FormFields = {
  email: string;
  password: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form className="flex flex-col w-96" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-3xl font-bold mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          {...(register("email"), { required: true })}
          className="border border-gray-300 p-2 rounded-lg mb-4"
        />
        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
        <input
          type="password"
          placeholder="Password"
          {...(register("password"), { required: true })}
          className="border border-gray-300 p-2 rounded-lg mb-4"
        />
        {errors.password && (
          <div className="text-red-500">{errors.password.message}</div>
        )}
        <button className="bg-blue-500 text-white p-2 rounded-lg">
          Submit
        </button>
      </form>
    </main>
  );
}
