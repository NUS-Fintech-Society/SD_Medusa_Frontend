import { StockData } from "@/types/StockData";
import { SampleStockData } from "@/data/SampleStockData";
import React, { SetStateAction, useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import StockCard from "./StockCard";

function StockGrid({
  stockDataListProps,
}: {
  stockDataListProps: StockData[];
}) {

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (newPage: SetStateAction<number>) => {
    setCurrentPage(newPage);
  };

  const totalScore = stockDataListProps.reduce((sum, card) => sum + card.Score, 0);
  // Determine the background color and sentiment text based on totalScore
  let bgColorClass = '';
  let sentimentText = '';

  if (totalScore > 0) {
    bgColorClass = 'bg-accent-green';
    sentimentText = 'POSITIVE';
  } else if (totalScore === 0) {
    bgColorClass = 'bg-ftnal-lightgrey';
    sentimentText = 'NEUTRAL';
  } else {
    bgColorClass = 'bg-accent-red';
    sentimentText = 'NEGATIVE';
  }

  return (
    <>
      <div className={`w-1/2 lg:w-1/5 text-center ${bgColorClass} text-ftnal-white text-body-s lg:text-body-l rounded p-2 m-2 lg:m-5`}>
        Overall Sentiment: {sentimentText}
      </div>
      {/* <div className="w-1/2 lg:w-3/4 text-brand-yellow text-h2-s float-left">Latest News and Sentiments</div> */}
      <div className="w-3/4 mt-5 flex flex-row flex-wrap justify-around gap-y-20 gap-x-8">
      {stockDataListProps.map((stockData, index) => (
                <StockCard
                  key={index}
                  stockData={stockData}
                />
        ))}
      </div>

    </>
  );
}

export default StockGrid;
