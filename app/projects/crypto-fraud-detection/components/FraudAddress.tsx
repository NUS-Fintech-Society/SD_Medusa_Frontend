import { AiOutlineCheckSquare } from "react-icons/ai";


const FraudAddress = ({ prediction }: { prediction: string}) => {
  return (
    <div className="flex justify-center items-center space-x-20">
      <div className="text-white mt-5 text-left">
        <div className="text-body-l">Prediction: </div>
        <div className="text-h1-l">{ parseInt(prediction) > 0.5 ? 
        <div className="text-accent-red"> Fraud </div> 
        : <div className="text-accent-green"> Not Fraud </div> } </div>
      </div>
      <div className="flex flex-col mt-5">
        <div className="flex flex-row items-center space-x-8">
          <div className="text-h2-s w-24">{prediction}</div>
          <div className="text-[0.9375rem] flex items-center space-x-2">
            <span>Fraud Probability</span>
            <AiOutlineCheckSquare
              className="hidden"
              size={16}
            />
          </div>
        </div>
        <div className="flex flex-row items-center space-x-8">
          <div className="text-h2-s w-24">{1 - parseInt(prediction)}</div>
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
