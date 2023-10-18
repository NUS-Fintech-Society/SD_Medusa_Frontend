"use client";
import { BsCheck2Circle } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoWarningOutline } from "react-icons/io5";

// If enum is better than hard coding
// export enum FeedbackType {
//     success = 1,
//     error,
//     info,
//     warning
// }

export interface FeedbackProps {
  type: string;
  heading: string;
  text: string;
}

const Feedback: React.FC<FeedbackProps> = ({ type, heading, text }) => {
  let color;
  let icon;
  let textColor;
  if (type === "success") {
    color = "bg-fdbk-green";
    textColor = "text-[#456A3E]";
    icon = <BsCheck2Circle size={40} />;
  } else if (type === "error") {
    color = "bg-fdbk-red";
    textColor = "text-[#6A493E]";
    icon = <RxCrossCircled size={40} />;
  } else if (type === "info") {
    color = "bg-fdbk-blue";
    textColor = "text-[#3E606A]";
    icon = <AiOutlineInfoCircle size={40} />;
  } else {
    color = "bg-fdbk-purple";
    textColor = "text-[#4A3E6A]";
    icon = <IoWarningOutline size={40} />;
  }
  return (
    <div
      className={`flex items-center w-full ${color} p-6 text-black-500 rounded-md ${textColor}`}
    >
      <span className="mr-5">{icon}</span>
      <div>
        <h1 className={`font-medium body-s mb-1`}>{heading}</h1>
        <p className={`font-normal`}>{text}</p>
      </div>
    </div>
  );
};

export default Feedback;
