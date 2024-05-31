import React from 'react';

interface FeaturesComponentProps {
  features: {
    [key: string]: { "0": number };
  } | null;
}

const Features: React.FC<FeaturesComponentProps> = ( { features } ) => {
  if (!features) {
    return <div>loading...</div>;
  }

  return (
    <div className="grid grid-rows-2 w-5/6 text-center mt-5 bg-brand-blue m-auto text-h4-s">
      <div className="grid grid-cols-7 border">
        <h1 className="border border-b-0 p-2 col-span-1"></h1>
        <h1 className="border border-b-0 p-2 col-span-2">
          Unique_received_from
        </h1>
        <h1 className="border border-b-0 p-2 col-span-2">min_ether_sent</h1>
        <h1 className="border border-b-0 p-2 col-span-2">max_ether_sent</h1>
      </div>
      <div className="grid grid-cols-7 border">
        <div className="border p-2 col-span-1">Value</div>
          <div className="border p-2 col-span-2"> {features.unique_received_from["0"]} </div> 
          <div className="border p-2 col-span-2">{features.min_ether_sent["0"]} </div> 
          <div className="border p-2 col-span-2">{features.max_ether_sent["0"]}</div>
      </div>
    </div>
  );
};

export default Features;
