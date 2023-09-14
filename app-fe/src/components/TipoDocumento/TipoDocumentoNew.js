import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidateTipoDocumento } from "@/validations/TipoDocumento.Validate.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useTipoDocumento } from "@/context/TipoDocumento.Context.js";
import InputText from "@/components/Inputs/InputText.js";

function PersonaNew() {
  const { insert, changePage } = useTipoDocumento();

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ValidateTipoDocumento),
  });

  const onSubmit = async (e) => {
    console.log(e);
    const res = await insert(e);
    if (res.status === 204) {
      toast.success("Documento Agregado Correctamente");
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
                "url('https://img.freepik.com/vector-gratis/concepto-evaluacion-credito-dibujado-mano-documentos_23-2149154259.jpg?w=2000')",
            }}
          ></div>
          <div className="w-full lg:w-7/12 dark:bg-gray-400 p-5 rounded-lg lg:rounded-l-none">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="px-8 pt-6 pb-8 mb-4 dark:bg-gray-900 rounded"
            >
              <div className="mb-4">
                <InputText
                  label={"Nombre Documento"}
                  name={"nombre"}
                  type={"text"}
                  placeholder={"Ingrese nombre..."}
                  register={register}
                  errors={errors.nombre?.message}
                />
              </div>
              <div className="mb-6 text-center">
                <button
                  className="w-full mt-3 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Registrar Documento
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

export default PersonaNew;
