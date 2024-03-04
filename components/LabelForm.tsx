"use client";

import submitContactForm from "@/actions/submitContactForm";
import { FormFields } from "@/types";
import { useForm } from "react-hook-form";

export default function LabelForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  async function onSubmit(data: FormFields) {
    submitContactForm(data);
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 w-full lg:w-[45%]"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="label-name" className="text-xs">
          Label Name
        </label>
        <input
          {...register("name", {
            required: "Please enter a label name",
          })}
          type="text"
          placeholder="Your Label"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="label-name" className="text-xs">
          Submission Link
        </label>
        <input
          {...register("link", {
            required: "Plese enter a submission link",
          })}
          type="text"
          placeholder="yourlabel.com/demos"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="label-name" className="text-xs">
          Instagram
        </label>
        <input
          {...register("instagram", {
            required: "Please enter an instagram username",
          })}
          type="text"
          placeholder="yourlabel"
        />
      </div>
      <button
        disabled={isSubmitting}
        className="self-start px-3 py-2 rounded-full border border-demo-smoke text-sm uppercase hover:bg-demo-smoke hover:text-bridal-health transition-all duration-300"
      >
        {isSubmitting ? "Sent" : "Send Form"}
      </button>
    </form>
  );
}
