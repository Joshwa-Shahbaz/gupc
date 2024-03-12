import ContainerWrapper from "@/components/ContainerWrapper";
import ButtonWrapper from "@/components/UI/ButtonWrapper";
import React, { useState } from "react";

type FormDataProps = {
  title: string;
  description: string;
};

const AddTopics = () => {
  const [data, setData] = useState<FormDataProps>({
    title: "",
    description: "",
  });
  const [errors, setErrors] = useState<{
    title?: string;
    description?: string;
  }>({});

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {};
    if (data.title.trim() === "") {
      newErrors.title = "Please fill in the title";
    }
    if (data.description.trim() === "") {
      newErrors.description = "Please fill in the description";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", data);

      setData({ title: "", description: "" });
    }
  };

  return (
    <ContainerWrapper>
      <div className="mt-5">
        <form onSubmit={handleFormSubmit}>
          <div className="flex flex-col gap-3">
            <input
              className={`border border-slate-500 px-8 py-3 ${
                errors.title ? "text-red-500" : ""
              }`}
              type="text"
              placeholder="Title"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
            {errors.title && (
              <span className="text-red-500 mt-3">{errors.title}</span>
            )}

            <input
              className={`border border-slate-500 px-8 py-3 ${
                errors.description ? "text-red-500" : ""
              }`}
              placeholder="Description"
              value={data.description}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
            />
            {errors.description && (
              <span className="text-red-500 mt-3">{errors.description}</span>
            )}
          </div>
          <div className="mt-5">
            <ButtonWrapper buttonType="submit">Submit</ButtonWrapper>
          </div>
        </form>
      </div>
    </ContainerWrapper>
  );
};

export default AddTopics;
