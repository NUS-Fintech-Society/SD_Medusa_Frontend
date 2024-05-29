"use client";
import WithSubnavigation from "../components/navbar/NavBar";
import Features from "./components/Features";
import FraudAddress from "./components/FraudAddress";
import Guide from "./components/Guide";
import SearchInput from "./components/SearchInput";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [result, setResult] = useState<any>(null);
  
  function FetchData(query: string) {
   
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(`https://ysmpkqmb16.execute-api.ap-southeast-1.amazonaws.com/dev/dummy/crypto-fraud?address=${query}`)
        setResult(response.data);
      };
      fetchData();
    }, [query])
  }

  // const handleSearch = async (query: string) => {
  //   const response = await fetch(`https://ysmpkqmb16.execute-api.ap-southeast-1.amazonaws.com/dev/dummy/crypto-fraud?address=${query}`);
  //   const data = await response.json();
  //   setResult(data);
  // }

  return (
    <>
      <WithSubnavigation />
      <div className="bg-brand-blue h-fit text-white max-w-screen-2xl overflow-hidden pb-10">
        <Guide />
        <SearchInput onSearch={FetchData}/>
        <div className="flex flex-col mt-12 relative left-[12rem]">
          <FraudAddress result = {result} />
          <Features />
          <h1 className="text-brand-yellow text-h2-s mt-12">
            3. Model Explanability (Top 3)
          </h1>
          <span className="mt-2">
            Please refresh page if image isn’t loading
          </span>
          <div className="flex flex-col w-2/3">
            <div className="text-h4-s text-left relative left-[24rem]">
              <h1 className="underline">Local explanation for class</h1>
              <h1>Red: Indicates fraud</h1>
              <h1>Green: Indicates not fraud</h1>
            </div>
            <div className="grid grid-rows-2 text-right mt-5 w-4/5">
              <div className="flex items-center h-16">
                <h1 className="p-2 pr-5 w-1/3">
                  {"unique_received_from <= 1.00"}
                </h1>
                <div className="bg-white border-black border w-[30%] h-16"></div>
                <div className="bg-accent-green border-black border w-[30%] h-16"></div>
              </div>
              <div className="flex items-center h-16">
                <h1 className="p-2 w-1/3 pr-5">min_ether_sent</h1>
                <div className="bg-white border-black border w-[30%] h-16"></div>
                <div className="bg-accent-green border-black border w-[30%] h-16"></div>
              </div>
              <div className="flex items-center h-16">
                <h1 className="p-2 w-1/3 pr-5">max_ether_sent</h1>
                <div className="bg-white border-black border w-[30%] h-16"></div>
                <div className="bg-accent-green border-black border w-[30%] h-16"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
