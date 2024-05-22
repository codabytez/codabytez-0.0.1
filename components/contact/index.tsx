"use client";
import { NextPage } from "next";
import { useState } from "react";
import ContactSidebar from "./sidebar";
import Image from "next/image";
import close from "@/public/close.svg";
import ContactForm from "./contact-form";
import CodeString from "./code-string";
import { motion } from "framer-motion";

const Contact: NextPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex w-full">
      <ContactSidebar />
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "-100vw" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex flex-col flex-1"
      >
        <div className="w-max h-10 border-r border-line flex items-center gap-11 px-3.5 shrink-0">
          <p>contacts</p>
          <button>
            <Image src={close} alt="close" />
          </button>
        </div>
        <div className="border-t border-line w-full h-full flex justify-between items-stretch">
          <ContactForm form={form} handleChange={handleChange} />
          <div className="h-full w-[1px] bg-line" />

          <CodeString form={form} />
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
