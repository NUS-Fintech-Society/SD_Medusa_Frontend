const Guide = () => {
  return (
    <div>
      <h1 className="text-brand-yellow text-h1-l text-center">
        Crypto Fraud Prediction
      </h1>
      <div className="border-white border rounded-[0.625rem] w-1/2 m-auto p-5 pb-10 mt-10">
        <h1 className="text-h2-s font-bold">How to use?</h1>
        <div className="text-body-l mt-5">
          <p>
            Key in address into the text box and search. The following items
            will be displayed:
          </p>
          <ul className="list-disc pl-8">
            <li>Is address Fraud?</li>
            <li>
              Features related to the address (up to the first 10,000
              transactions)
            </li>
            <li>
              The importance of features in making the suggested prediction
              (Model explainability)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Guide;
