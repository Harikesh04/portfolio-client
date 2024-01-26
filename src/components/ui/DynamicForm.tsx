"use client";

import React, { useState } from "react";
import Button from "./Button";
import { SiMinutemailer } from "react-icons/si";


interface DynamicFormProps {
  fields: any;
  loading: boolean;
  onSubmit: (formData: Record<string, string>, resetFormState: () => void) => void;

}

const DynamicForm: React.FC<DynamicFormProps> = ({ fields,loading, onSubmit }) => {
  const [formState, setFormState] = useState<Record<string, string>>({});

  const handleInputChange = (fieldName: string, value: string) => {
    setFormState({ ...formState, [fieldName]: value });
  };

  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formState, () => setFormState({}));
  };

  

  return (
    <div className="max-w-md mx-auto p-6 bg-black-100 rounded-xl shadow-md">
      <form onSubmit={handleSubmit} className="p-2">
        <div className="flex flex-col">
          {fields.map((field:any, index:any) => (
            <div key={index} className="flex flex-col mb-4">
              <label
                htmlFor={field.name}
                className="text-sm font-semibold text-white"
              >
                {field.label}
              </label>
              {field.type === "textArea" ? (
                <textarea
                  value={formState[field.name] || ""}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                  required={field.required}
                  className="mt-1 p-2  outline-none rounded-md focus:outline-none bg-tertiary text-slate-300"
                />
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  value={formState[field.name] || ""}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                  className="mt-1 p-2  outline-none rounded-md focus:outline-none bg-tertiary text-slate-300"
                />
              )}
            </div>
          ))}
        </div>
        <div>
          <Button btnType={"default"} loading={loading}>Submit Message <SiMinutemailer/></Button>
        </div>
      </form>
    </div>
  );
};

export default DynamicForm;
