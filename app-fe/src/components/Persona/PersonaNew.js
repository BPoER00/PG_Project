import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidatePersona } from "@/validations/Persona.Validate.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { usePersona } from "@/context/Persona.Context.js";
import InputText from "@/components/Inputs/InputText.js";
import InputSelect from "@/components/Inputs/InputSelect.js";

function PersonaNew() {
  const { familia, tipoDocumento, insert, changePage } = usePersona();

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(ValidatePersona),
  });

  const onSubmit = async (e) => {
    const res = await insert(e);
    if (res.status === 204) {
      toast.success("Persona Ingresada Correctamente");
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
                "url('https://cdn.republica.gt/102021/1635540713169.jpeg?&cw=600&ch=365')",
            }}
          ></div>
          <div className="w-full lg:w-7/12 dark:bg-gray-400 p-5 rounded-lg lg:rounded-l-none">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="px-8 pt-6 pb-8 mb-4 dark:bg-gray-900 rounded"
            >
              <div className="mb-4">
                <InputSelect
                  label={"Tipo Documento"}
                  name={"tipoDocumento_id"}
                  options={tipoDocumento}
                  control={control}
                  placeholder={"Ingrese tipo documento..."}
                  errors={errors.tipoDocumento_id?.message}
                />
              </div>

              <div className="mb-4">
                <InputSelect
                  label={"Familia"}
                  name={"familia_id"}
                  options={familia}
                  control={control}
                  placeholder={"Ingrese familia..."}
                  errors={errors.familia_id?.message}
                />
              </div>

              <div className="mb-4">
                <InputText
                  label={"Codigo Identificacion"}
                  name={"codigoIdentificacion"}
                  type={"text"}
                  placeholder={"Ingrese codigo..."}
                  register={register}
                  errors={errors.codigoIdentificacion?.message}
                />
              </div>

              <div className="mb-6 text-center">
                <button
                  className="w-full mt-3 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Registrar Persona
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
