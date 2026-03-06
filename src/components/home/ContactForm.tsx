import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import arrow from "@/assets/image/icon/Arrow.svg";
import { Link } from "react-router-dom";
type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [success, setSuccess] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log(data);

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      reset();
    }, 3000);
  };

  return (
    <div className="contactWrapper">
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="glassForm"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className=" flex  flex-row gap-4 justify-between w-full">
            {/* NAME */}
            <div className="inputGroup w-1/2">
            <input
                {...register("name", { required: "Name is required" })}
                placeholder=" "
            />
            <label>Name</label>
            <span className="line"></span>
            {errors.name && <p className="error">{errors.name.message}</p>}
            </div>

            {/* PHONE */}
            <div className="inputGroup w-1/2">
            <input
                {...register("phone", { required: "Phone is required" })}
                placeholder=" "
            />
            <label>Phone</label>
            <span className="line"></span>
            {errors.phone && <p className="error">{errors.phone.message}</p>}
            </div>
        </div>

        {/* EMAIL */}
        <div className="inputGroup w-full">
          <input
            {...register("email", {
              required: "Email required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email",
              },
            })}
            placeholder=" "
          />
          <label>Email</label>
          <span className="line"></span>
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        {/* MESSAGE */}
        <div className="inputGroup w-full">
          <textarea
            rows={4}
            {...register("message", { required: "Message required" })}
            placeholder=" "
          />
          <label>Message</label>
          <span className="line"></span>
          {errors.message && <p className="error">{errors.message.message}</p>}
        </div>
        <div className=" flex  flex-row gap-4 justify-between w-full items-center">  
            <div className="w-1/2">
                <p className="text-sm text-darkGrey font-light   flex flex-row">By clicking submit, I acknowledge I have read and accepted the <Link to="#" className=" text-sm text-darkGrey font-light underline inline-block pl-2 hover:text-orange ">Privacy Policy.</Link></p>
            </div>
             <div className="w-1/2 flex justify-end">
                <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cta-button flex justify-center items-center gap-2 
                bg-transparent rounded-[70px] border-[2px] border-darkText 
                text-darkText h-auto hover:bg-orange hover:text-white hover:border-orange focus-visible:border-0 focus-visible:outline-none   focus:border-0 focus:outline-none "
                >
                    Submit Request 
                    <span className="icon bg-orange p-1 rounded-full flex items-center ml-2 w-7 h-7 justify-center">
                        <img src={arrow} alt="Logo" />
                    </span>
                </motion.button>
            </div>
        </div>  
        {success && (
          <motion.div
            className="success"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <p className="text-lg text-white font-light   flex flex-row">✅ Message Sent Successfully</p>
          </motion.div>
        )}
      </motion.form>
    </div>
  );
}