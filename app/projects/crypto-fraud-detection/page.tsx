"use client";
import { useState } from "react";
import Features from "./components/Features";
import FraudAddress from "./components/FraudAddress";
import Guide from "./components/Guide";
import SearchInput from "./components/SearchInput";
import Model from "./components/Model";
import useFetchData from "@/app/hooks/useFetchData";


export default function Home() {
  const [query, setQuery] = useState<string | null>(null);
  const { result, loading, error } = useFetchData(query || '');

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery); 
    console.log(searchQuery);
    
  };


  const [show, setShow] = useState({
    address: true,
    features: false,
    model: false,
  });

  return (
    <div className="bg-brand-blue text-white min-h-screen min-w-screen overflow-x-hidden pb-10 flex flex-col justify-center">
      <Guide />
      <SearchInput onSearch={handleSearch}/>
      <div className="w-3/4 mx-auto flex flex-col mt-16 justify-center items-start">
        <div className="text-h2-s text-center bg-[#323B64] w-full rounded-lg p-2 px-4">
          <div className="flex flex-row align-center justify-start w-full">
            <span
              className={`border-r-[1px] px-10 cursor-pointer ${
                show.address && "text-brand-yellow"
              }`}
              onClick={() =>
                setShow({
                  address: true,
                  features: false,
                  model: false,
                })
              }
            >
              Is address Fraud?
            </span>
            <span
              className={`border-r-[1px] px-10 cursor-pointer ${
                show.features && "text-brand-yellow"
              }`}
              onClick={() =>
                setShow({
                  address: false,
                  features: true,
                  model: false,
                })
              }
            >
              Features (Top 3)
            </span>
            <span
              className={`px-10 cursor-pointer ${
                show.model && "text-brand-yellow"
              }`}
              onClick={() =>
                setShow({
                  address: false,
                  features: false,
                  model: true,
                })
              }
            >
              Model Explanability (Top 3)
            </span>
          </div>
          <hr className="w-full mt-2" />
          <div className="my-10 mb-14">
            {show.address && <FraudAddress />}
            {show.features && result && <Features features={result.features} />}
            {show.model && <Model />}
          </div>
        </div>
      </div>
    </div>
  );
}
