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
      <div className="bg-gray-300 flex justify-center items-center h-full w-full">
        Image
        {/* <img className="" src="" alt="" /> */}
      </div>
      <div
        className={`flex flex-col items-center justify-center m-10 ${
          col && "w-1/2"
        }`}
      >
        <h1 className="font-[400] mb-1 text-h1-l">{heading || "No Data"}</h1>
        <p>{text || "There is actually no data here"}</p>
      </div>
    </div>
  );
};

export default NoData;
