import { useForm } from "react-hook-form";
import { FormControl, Input } from "@chakra-ui/react";
import Button from "../../components/inputs/SmallButton";

export default function HookForm() {
  //   const {
  //     handleSubmit,
  //     register,
  //     formState: { errors, isSubmitting },
  //   } = useForm()

  //   function onSubmit(values: any) { // leave as any for now till finalize
  //     return new Promise<void>((resolve) => {
  //       setTimeout(() => {
  //         alert(JSON.stringify(values, null, 2))
  //         resolve()
  //       }, 3000)
  //     })
  //   }

  return (
    <div className="w-[1006px] h-[399px] text-[24px] font-normal rounded-[20px] bg-white">
      <form className="flex flex-col items-center justify-evenly h-full px-[44.5px] text-black">
        <div className="flex justify-between items h-[54px] w-full">
          <FormControl isRequired>
            <Input
              placeholder="Full Name"
              className="bg-[#E8E7E7] rounded-[10px] w-[434px] h-full outline-none pl-[20px] caret-black "
            />
          </FormControl>
          <FormControl isRequired>
            <Input
              placeholder="Email Address"
              type="email"
              className="bg-[#E8E7E7] rounded-[10px] w-[434px] h-full outline-none pl-[20px] caret-black"
            />
          </FormControl>
        </div>
        <FormControl isRequired>
          <Input
            placeholder="Subject"
            className="bg-[#E8E7E7] rounded-[10px] w-[917px] h-[54px] outline-none pl-[20px] caret-black"
          />
        </FormControl>
        <FormControl isRequired>
          <textarea
            placeholder="Message"
            className="bg-[#E8E7E7] rounded-[10px] w-[917px] h-[142px] outline-none pl-[20px] caret-black resize-none"
          />
        </FormControl>
        <div className="w-[138px] h-[28px] text-[13px]">
          <Button colour="brand-yellow-black">Read More</Button>
        </div>
      </form>
    </div>
  );
}
