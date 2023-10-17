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
  if (type === "success") {
    color = "bg-fdbk-green";
    icon = <BsCheck2Circle size={40} />;
  } else if (type === "error") {
    color = "bg-fdbk-red";
    icon = <RxCrossCircled size={40} />;
  } else if (type === "info") {
    color = "bg-fdbk-blue";
    icon = <AiOutlineInfoCircle size={40} />;
  } else {
    color = "bg-fdbk-purple";
    icon = <IoWarningOutline size={40} />;
  }
  return (
    <div
      className={`flex items-center w-full ${color} p-6 text-black-500 rounded-md`}
    >
      <span className="mr-5">{icon}</span>
      <div>
        <h1 className="font-[400] mb-1">{heading}</h1>
        <p className="font-light text-gray-500">{text}</p>
      </div>
    </div>
  );
};

export default Feedback;
