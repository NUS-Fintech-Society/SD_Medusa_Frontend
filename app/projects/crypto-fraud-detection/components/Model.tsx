interface ModelComponentProps {
  features: {
    [key: string]: { "0": number };
  } | null;
}

const Model : React.FC<ModelComponentProps> = ( { features } ) => {
  return (
    <div className="flex flex-row items-center w-full">
      <div className="grid grid-rows-2 text-right w-[78%] mt-2 text-h4-s">
        <div className="flex items-center h-16">
          <h1 className="p-2 pr-5 w-1/3">{"unique_received_from <= 1.00"}</h1>
          <div className="bg-white border-black border w-[30%] h-16">
            <p className="text-black py-4 text-center">{features && features.unique_received_from["0"]}</p>
          </div>
          <div className="bg-accent-green border-black border w-[30%] h-16"></div>
        </div>
        <div className="flex items-center h-16">
          <h1 className="p-2 w-1/3 pr-5">min_ether_sent</h1>
          <div className="bg-white border-black border w-[30%] h-16">
            <p className="text-black py-4 text-center">{features && features.min_ether_sent["0"]}</p>
          </div>
          <div className="bg-accent-green border-black border w-[30%] h-16"></div>
        </div>
        <div className="flex items-center h-16">
          <h1 className="p-2 w-1/3 pr-5">max_ether_sent</h1>
          <div className="bg-white border-black border w-[30%] h-16">
            <p className="text-black py-4 text-center">{features && features.max_ether_sent["0"]}</p>
          </div>
          <div className="bg-accent-green border-black border w-[30%] h-16"></div>
        </div>
      </div>
      <div className="text-h4-s text-left">
        <h1 className="underline">Local explanation for class</h1>
        <h1>Red: Indicates fraud</h1>
        <h1>Green: Indicates not fraud</h1>
      </div>
    </div>
  );
};

export default Model;
