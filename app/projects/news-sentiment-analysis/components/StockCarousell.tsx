import { StockData } from "./StockDropdown";
import { SampleStockData } from "@/data/SampleStockData";
import React, { SetStateAction, useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import StockCard from "./StockCard";

function StockCarousel({
  stockDataListProps,
}: {
  stockDataListProps: StockData[];
}) {
  // Define the number of cards to display per slide
  const cardsPerSlide = 4;

  // Split the card data into groups for each slide
  const cardGroups = [];
  for (let i = 0; i < stockDataListProps.length; i += cardsPerSlide) {
    cardGroups.push(stockDataListProps.slice(i, i + cardsPerSlide));
  }

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
    bgColorClass = 'bg-brand-yellow';
    sentimentText = 'NULL';
  } else {
    bgColorClass = 'bg-accent-red';
    sentimentText = 'NEGATIVE';
  }

  return (
    <>
      <div className={`w-1/2 lg:w-1/5 text-center ${bgColorClass} text-ftnal-white text-body-s lg:text-body-l rounded p-2 m-2 lg:m-5`}>
        Overall Sentiment: {sentimentText}
      </div>
      <div className="w-1/2 lg:w-3/4 text-brand-yellow text-h2-s float-left">Latest News and Sentiments</div>
      <Carousel
        className="w-1/2 lg:w-3/4"
        selectedItem={currentPage}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
      >
        {cardGroups.map((group, index) => (
          <div key={index}>
            {group.map((card, cardIndex) => (
              <div key={cardIndex}>
                <StockCard
                  key={index}
                  stockData={card}
                />
              </div>
            ))}
          </div>
        ))}
      </Carousel>
      <div>
        {cardGroups.map((group, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index)}
            className={`w-7 h-7 rounded-full cursor-pointer m-1 mt-8
        ${
          currentPage === index
            ? "bg-yellow-500 text-white"
            : "bg-white text-black"
        }`}
          >
            {index}
          </button>
        ))}
      </div>
    </>
  );
}

export default StockCarousel;
