import { ChangeEvent } from "react";

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  id,
  label,
  placeholder,
  type,
  value,
  onChange,
}: InputFieldProps) => (
  <div className="mt-4">
    <label className="block mb-2 text-sm text-[#999999]" htmlFor={id}>
      {label}
    </label>
    <input
      className="border border-[#CFCFCF] text-sm rounded-md block w-full p-2.5"
      id={id}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default InputField;
