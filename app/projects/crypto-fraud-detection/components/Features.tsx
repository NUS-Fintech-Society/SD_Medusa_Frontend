const Features = () => {
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
        <h1 className="border p-2 col-span-1">Value</h1>
        <h1 className="border p-2 col-span-2">1.0000</h1>
        <h1 className="border p-2 col-span-2">0.0000</h1>
        <h1 className="border p-2 col-span-2">40.9164</h1>
      </div>
    </div>
  );
};

export default Features;
