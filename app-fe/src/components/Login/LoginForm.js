"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLogin } from "@/context/Login.Context.js";
import { useRouter } from "next/navigation";
import { ValidateLogin } from "@/validations/Login.Validate.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import ProgresBar from "../Inputs/ProgresBar.js";
import "react-toastify/dist/ReactToastify.css";

function LoginForm() {
  const router = useRouter();

  const { Login } = useLogin();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ValidateLogin),
  });

  const onSubmit = async (e) => {
    const res = await Login(e);
    if (res.status === 200) {
      toast.success(res.data.message);
      router.push("/Dashboard");
      setLoading(true);
    } else if (res.status === 400 || res.status === 401) {
      toast.warning(`Error al ingresar ${res.data.message}`);
    }
  };

  return (
    <>
      {loading ? (
        <ProgresBar />
      ) : (
        <div
          className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/1200x/41/c0/a3/41c0a3a1899736a930e1bd628eb43fd1.jpg')",
          }}
        >
          <ToastContainer />
          <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-w-sm">
            <div className="text-white items-center">
              <div className="mb-8 flex flex-col items-center">
                <img
                  src="https://img.freepik.com/iconos-gratis/conductor_318-403022.jpg"
                  width="150"
                />
                <h1 className="mb-2 mt-3 text-2xl">Colonia Ramirez</h1>
                <span className="text-gray-300">Enter Login Details</span>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="items-center flex flex-col"
              >
                <div className="mb-4 text-lg items-center">
                  <input
                    className="rounded-2xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                    type="text"
                    placeholder="Username"
                    {...register("username")}
                  />
                  <span className="text-red-500 text-center">
                    {errors.username?.message}
                  </span>
                </div>

                <div className="mb-4 text-lg">
                  <input
                    className="rounded-2xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                    type="Password"
                    placeholder="*********"
                    {...register("password")}
                  />
                  <span className="text-red-500">
                    {errors.password?.message}
                  </span>
                </div>
                <div className="mt-8 flex justify-center text-lg text-black">
                  <button
                    type="submit"
                    className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      ;
    </>
  );
}

export default LoginForm;
