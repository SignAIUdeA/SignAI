import { useState, ChangeEvent, FormEvent } from "react";

export interface FormObject {
  [key: string]: string;
}

interface FormHook {
  handleChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  inputs: FormObject;
}

const useForm = (object: FormObject): FormHook => {
  const [inputs, setInputs] = useState<FormObject>(object);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { target } = evt;
    const { name, value } = target;

    const newValues = {
      ...inputs,
      [name]: value,
    };

    setInputs(newValues);
  };

  return {
    handleChange,
    inputs,
  };
};

export default useForm;
