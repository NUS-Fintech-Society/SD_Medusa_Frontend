import { useForm } from "react-hook-form";
import { FormControl, Input } from "@chakra-ui/react";
import Button from "../../components/inputs/SmallButton";

export default function HookForm() {
  return (
    <div className="w-[1006px] h-[399px] text-[24px] font-normal rounded-[20px] bg-white">
      <form
        className="flex flex-col items-center justify-evenly h-full px-[44.5px] text-black"
        target="_blank"
        action="https://formsubmit.co/d3aac6a2bd9d8f0b7a20b48015211b62"
        method="POST"
      >
        <div className="flex justify-between items h-[54px] w-full">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="bg-[#E8E7E7] rounded-[10px] w-[434px] h-full outline-none pl-[20px] caret-black "
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="bg-[#E8E7E7] rounded-[10px] w-[434px] h-full outline-none pl-[20px] caret-black"
            required
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="bg-[#E8E7E7] rounded-[10px] w-[917px] h-[54px] outline-none pl-[20px] caret-black"
          required
        />
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Message"
            className="bg-[#E8E7E7] rounded-[10px] w-[917px] h-[142px] outline-none pl-[20px] caret-black resize-none"
            required
          />
        </div>
        <div className="w-[138px] h-[28px] text-[13px]">
          <Button colour="brand-yellow-black">Send Message</Button>
        </div>
      </form>
    </div>
  );
}
