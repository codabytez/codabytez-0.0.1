"use client";
import { NextPage } from "next";
import { useState } from "react";
import ContactSidebar from "./sidebar";
import Image from "next/image";
import close from "@/public/close.svg";
import ContactForm from "./contact-form";
import CodeString from "./code-string";

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
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex w-full">
      <ContactSidebar />

      <div className="flex flex-col flex-1">
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
      </div>
    </div>
  );
};

export default Contact;

// % of 1471 that will give 630 and 841 respectively
// 630/1471 = 0.42857142857142855 * 100 = 42.857142857142854
// 841/1471 = 0.5714285714285714 * 100 = 57.14285714285714
// 42.857142857142854 + 57.14285714285714 = 100.0
