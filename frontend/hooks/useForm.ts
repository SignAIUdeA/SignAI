import { useState, ChangeEvent } from "react";

export type StringDictionary = {
  [key: string]: string;
};

interface FormHook<T extends StringDictionary> {
  handleChange: (
    evt: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  inputs: T;
}

const useForm = <T extends StringDictionary>(object: T): FormHook<T> => {
  const [inputs, setInputs] = useState<T>(object);

  const handleChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
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
