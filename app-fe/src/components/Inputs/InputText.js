function InputText({ label, name, type, placeholder, register, errors }) {
  return (
    <>
      <label className="font-semibold leading-none text-gray-600 dark:text-gray-300">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="text-gray-800 dark:text-gray-950 placeholder-gray-400 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blue-100 focus:border-blue-500 focus:bg-white dark:focus:bg-gray-400 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-blue-400"
        {...register(name)}
      />
      <span className="text-red-500 text-center">{errors}</span>
    </>
  );
}

export default InputText;
