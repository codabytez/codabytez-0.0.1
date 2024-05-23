import { NextPage } from "next";
import { Input, TextArea } from "../input";
import Button from "../button";
import { motion } from "framer-motion";

interface ContactFormProps {
  form: { name: string; email: string; message: string };
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const ContactForm: NextPage<ContactFormProps> = ({ form, handleChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full lg:w-[43%] flex items-center lg:justify-center py-10 px-5"
    >
      <form className="flex flex-col gap-6 w-full max-w-[372px]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Input
            label="_name:"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Input
            label="_email:"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <TextArea
            label="_message:"
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button variant="secondary" className="w-max">
            submit-message
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
