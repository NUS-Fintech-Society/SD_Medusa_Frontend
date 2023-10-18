"use client";

export interface NoDataProps {
  col?: boolean;
  heading?: string;
  text?: string;
}

const NoData: React.FC<NoDataProps> = ({ col, heading, text }) => {
  return (
    <div
      className={`flex justify-center text-center h-[32.5em] w-full ${
        col ? "flex-row h-[35em]" : "flex-col"
      }`}
    >
      <div className="bg-[#D9D9D9] flex justify-center items-center h-full w-full">
        Image
        {/* <img className="" src="" alt="" /> */}
      </div>
      <div
        className={`flex flex-col items-center justify-center m-10 ${
          col && "w-1/2"
        }`}
      >
        <h1 className="font-medium mb-1 text-h3-l">{heading || "No Data"}</h1>
        <p className={`font-normal text-body-l w-2/3 ${col && "text-left"}`}>
          {text || "I told you no data alr rite"}
        </p>
      </div>
    </div>
  );
};

export default NoData;
