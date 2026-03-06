
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SubmitButton from "./SubmitButton";

export interface ContactField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
  placeholder: string;
}

export interface ContactFormProps {
  title: string;
  fields: ContactField[];
  submitText: string;
  onSubmit: (data: Record<string, string>) => void;
}


const ContactForm: React.FC<ContactFormProps> = ({
  title,
  fields,
  submitText,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <section className="max-w-xl rounded-3xl bg-[#F5F9FF] p-8 md:p-10">
      <h2 className="mb-8  text-darkText">
        {title}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {fields.map((field) => (
          <div key={field.name}>
            {field.type === "textarea" ? (
              <Textarea
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name] || ""}
                onChange={handleChange}
                className="min-h-[120px] rounded-mb border-none bg-white text-darkText text-sm font-normal placeholder:text-sm placeholder:text-darkText placeholder:font-normal "
              />
            ) : (
              <Input
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.name] || ""}
                onChange={handleChange}
                className="h-12 rounded-mb border-none bg-white text-darkText text-sm font-normal placeholder:text-sm placeholder:text-darkText placeholder:font-normal"
              />
            )}
          </div>
        ))}

        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-7">
            <p className="text-darkText text-sm font-normal ">
              By clicking submit, I acknowledge I have read and accepted the{" "}
              <span className="underline cursor-pointer">Privacy Policy</span>.
            </p>
          </div>
          <div className="col-span-5">
            <SubmitButton title={submitText}  />
          </div>
        </div>
        
     </form>
    </section>
  );
};

export default ContactForm;
