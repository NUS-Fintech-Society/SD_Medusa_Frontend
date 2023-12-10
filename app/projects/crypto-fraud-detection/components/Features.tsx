const Features = () => {
  return (
    <>
      <h1 className="text-brand-yellow text-h2-s mt-12">2. Features (Top 3)</h1>
      <div className="grid grid-rows-2 w-2/3 text-center mt-5">
        <div className="grid grid-cols-4 border">
          <h1 className="border border-b-0 p-2"></h1>
          <h1 className="border border-b-0 p-2">Unique_received_from</h1>
          <h1 className="border border-b-0 p-2">min_ether_sent</h1>
          <h1 className="border border-b-0 p-2">max_ether_sent</h1>
        </div>
        <div className="grid grid-cols-4 border">
          <h1 className="border p-2">Value</h1>
          <h1 className="border p-2">1.0000</h1>
          <h1 className="border p-2">0.0000</h1>
          <h1 className="border p-2">40.9164</h1>
        </div>
      </div>
    </>
  );
};

export default Features;
