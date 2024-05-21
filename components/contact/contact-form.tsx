import { NextPage } from "next";
import { Input, TextArea } from "../input";
import Button from "../button";

interface ContactFormProps {
  form: {
    name: string;
    email: string;
    message: string;
  };
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const ContactForm: NextPage<ContactFormProps> = ({ form, handleChange }) => {
  return (
    <div className="basis-[43%] flex items-center justify-center px-5">
      <form className="flex flex-col gap-6 w-full max-w-[372px]">
        <Input
          label="_name:"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <Input
          label="_email:"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <TextArea
          label="_message:"
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
        />
        <Button variant="secondary" className="w-max">
          submit-message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
