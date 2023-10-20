"use client";
import WithSubnavigation from "../components/navbar/NavBar";
import ContactCard from "./components/ContactCard";
import HookForm from "./components/HookForm";

export default function Home() {
  return (
    <>
      <WithSubnavigation />
      <div className="min-h-screen min-w-screen flex flex-col items-center bg-brand-blue ">
        <div className="flex flex-col items-center w-[1117px] text-dmsans text-white">
          <h1 className="font-bold text-[64px] h-[89px] ">CONTACT US</h1>
          <h1 className="font-bold mt-[25px] text-[24px] max-h-[33px]">
            Any questions or feedback? Drop us a message!
          </h1>
          <div className="pt-[27px]">
            <HookForm />
          </div>

          <div className="flex justify-between w-[1006px] pt-[66px]">
            <ContactCard
              logo={"email"}
              title={"Email Us"}
              desc={["nusfintech.ops@gmail.com "]}
            />
            <ContactCard
              logo={"location"}
              title={"Address"}
              desc={[
                "NUS School of Computing, COM1",
                "13 Computing Drive ",
                "Singapore 117417 ",
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
