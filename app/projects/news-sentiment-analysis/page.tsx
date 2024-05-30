"use client";

import { useState, useEffect } from "react";
import useFetchSentiment from "../../hooks/useFetchSentiment";
import NewsInput from "./components/NewsInput";

const Projects = () => {
  const [headline, setHeadline] = useState('');
  const [titleForAnalysis, setTitleForAnalysis] = useState('');
  const { result, error } = useFetchSentiment(titleForAnalysis);
  const [bgColorClass, setBgColorClass] = useState('');

  const analyzeSentiment = () => {
    setTitleForAnalysis(headline);
  };

  useEffect(() => {
    if (result) {
      if (result.label === 'positive') {
        setBgColorClass('bg-accent-green');
      } else if (result.label === 'negative') {
        setBgColorClass('bg-accent-red');
      } else {
        setBgColorClass('bg-ftnal-lightgrey');
      }
    }
  }, [result]);

  return (
    <div
      className="
        lg:block
        min-h-[calc(100vh-4rem)] 
        min-w-screen
        bg-brand-blue
        flex
        flex-col
        items-center
        lg:flex
        lg:flex-col
        lg:items-center
        pb-5
      "
    >
      <p className="text-h2-s md:text-h1-l text-center text-brand-yellow tracking-wider">
        Stock Sentiment API
      </p>
      <p className="text-body-s md:text-body-l font-thin text-center text-ftnal-offwhite tracking-wider">
        Get current stock news from various sources, along with NUS Fintech's sentiment rating
      </p>
      <div className="m-4 w-3/4 lg:w-4/5 flex justify-center z-10">
        <NewsInput setTicker={setHeadline}/>
      </div>
      <button
        onClick={analyzeSentiment}
        className="bg-blue-500 text-white p-2 rounded mb-4 lg:mb-0"
      >
        {'Analyze Sentiment'}
      </button>
      {result && (
        <div className={`w-1/2 lg:w-1/5 text-center ${bgColorClass} text-ftnal-black text-body-s lg:text-body-l rounded p-2 m-2 lg:m-5`}>
          Overall Sentiment: <span className="font-bold">{result.label.toUpperCase()}</span>
        </div>
      )}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default Projects;
