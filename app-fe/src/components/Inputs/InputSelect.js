import Select from "react-select";
import { useController } from "react-hook-form";

function InputSelect({ label, name, options, control, errors, ...rest }) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules: { required: "This field is required" },
    defaultValue: "",
  });

  return (
    <>
      <label className="font-semibold leading-none text-gray-600 dark:text-gray-300">
        {label}
      </label>
      <Select
        placeholder="Search Here..."
        className="text-gray-800 dark:text-gray-200 placeholder-gray-400 w-full py-2.5 mt-2 text-base transition duration-500 ring-gray-400"
        options={options}
        value={
          options ? options.find((option) => option.value === value) : null
        }
        onChange={(selectedOption) => onChange(selectedOption.value)}
        onBlur={onBlur}
        ref={ref}
        {...rest}
      />
      <span className="text-red-500 text-center">{errors}</span>
    </>
  );
}

export default InputSelect;
