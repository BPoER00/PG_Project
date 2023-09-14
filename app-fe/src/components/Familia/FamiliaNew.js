import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidateFamilia } from "@/validations/Familia.Validate.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useFamilia } from "@/context/Familia.Context.js";
import InputText from "@/components/Inputs/InputText.js";

function RevisionNew() {
  const { insert, changePage } = useFamilia();

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ValidateFamilia),
  });

  const onSubmit = async (e) => {
    const res = await insert(e);
    if (res.status === 204) {
      toast.success("Revision Realizada Correctamente");
      await sleep(3000);
      changePage(1);
    } else if (res.status === 400 || res.status === 401) {
      toast.warning(`Error ${res.data.message}`);
    }
  };

  return (
    <div className="container mx-auto">
      <ToastContainer />
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-4/4 lg:w-11/12 flex">
          <div
            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
            style={{
              backgroundImage:
                "url('https://elcierredigital.com/images/carpeta_relacionados/2022/07/18/20927_existen-8-tipos-distintos-de-familias-5f312cc934b72.jpg')",
            }}
          ></div>
          <div className="w-full lg:w-7/12 dark:bg-gray-400 p-5 rounded-lg lg:rounded-l-none">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="px-8 pt-6 pb-8 mb-4 dark:bg-gray-900 rounded"
            >
              <div className="mb-4">
                <InputText
                  label={"Nombre Familia"}
                  name={"nombre"}
                  type={"text"}
                  placeholder={"Ingrese nombre familia..."}
                  register={register}
                  errors={errors.nombre?.message}
                />
              </div>
              <div className="mb-4">
                <InputText
                  label={"Password"}
                  name={"password"}
                  type={"password"}
                  placeholder={"Ingrese password..."}
                  register={register}
                  errors={errors.password?.message}
                />
              </div>
              <div className="mb-6 text-center">
                <button
                  className="w-full mt-3 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Registrar Familia 
                </button>
              </div>
              <hr className="mb-6 border-t" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RevisionNew;
