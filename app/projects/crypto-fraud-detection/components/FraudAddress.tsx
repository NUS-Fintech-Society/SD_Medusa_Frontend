import { AiOutlineCheckSquare } from "react-icons/ai";

const FraudAddress = () => {
  return (
    <div className="flex justify-center items-center space-x-20">
      <div className="text-accent-green mt-5 text-left">
        <div className="text-body-l">Prediction: </div>
        <div className="text-h1-l">Not Fraud</div>
      </div>
      <div className="flex flex-col mt-5">
        <div className="flex flex-row items-center space-x-8">
          <div className="text-h2-s w-24">0.10186</div>
          <div className="text-[0.9375rem] flex items-center space-x-2">
            <span>Fraud Probability</span>
            <AiOutlineCheckSquare
              className="hidden"
              size={16}
            />
          </div>
        </div>
        <div className="flex flex-row items-center space-x-8">
          <div className="text-h2-s w-24">0.89814</div>
          <div className="text-[0.9375rem] flex items-center space-x-2">
            <span>Not Fraud Probability</span>
            <AiOutlineCheckSquare
              className="inline"
              size={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FraudAddress;
