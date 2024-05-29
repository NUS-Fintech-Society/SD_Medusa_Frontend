import { AiOutlineCheckSquare } from "react-icons/ai";


const FraudAddress= (result: any) => {

  if (result) {
  return (
    <>
      <h1 className="text-brand-yellow text-h2-s">1. Is fraud address?</h1>
      <h1 className="text-accent-green text-h3-s mt-5">
        Prediction - Not Fraud
      </h1>
      <div className="flex mt-5 space-x-5">
        <div>
          <div className="text-[0.9375rem] flex items-center space-x-2">
            <span>Fraud Probability</span>
            <AiOutlineCheckSquare
              className="hidden"
              size={16}
            />
          </div>
          <span className="text-h2-s">0.10186</span>
        </div>
        <div>
          <div className="text-[0.9375rem] flex items-center space-x-2">
            <span>Not Fraud Probability</span>
            <AiOutlineCheckSquare
              className="inline"
              size={16}
            />
          </div>
          <span className="text-h2-s">0.89814</span>
        </div>
      </div>
    </>
  );
  }
  return null;
};

export default FraudAddress;
