"use client";

import StockCarousel from "./StockCarousell";
import { useState } from "react";
import { SampleStockData } from "@/data/SampleStockData";

export interface StockData {
  Name: string;
  Link: string;
  Time: string;
  Score: number;
}

export interface StockDataProps {
  [stockTicker: string]: StockData[];
}

function StockDropdown({ stockDataProps }: { stockDataProps: StockDataProps }) {
  const stockTickers = Object.keys(stockDataProps); // Get an array of stock tickers
  const [selectedTicker, setSelectedTicker] = useState("");
  const [selectedData, setSelectedData] = useState<StockData[]>([]); // State to store the selected data

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedTicker(selectedValue);
    console.log(selectedData);

    // Retrieve the data based on the selected ticker
    if (selectedValue in SampleStockData) {
      setSelectedData(SampleStockData[selectedValue]);
    } else {
      setSelectedData([]); // Reset the data if the ticker is not found
    }
  };

  return (
    <>
      <div className="m-4 w-3/4 lg:1/2">
        <select
          onChange={handleChange}
          value={selectedTicker}
          className="h-10 md:h-12 w-full bg-ftnal-darkgrey text-ftnal-white rounded border-r-8 border-transparent px-4 text-sm outline outline-neutral-700"
        >
          <option
            value=""
            disabled
          >
            Select a stock ticker
          </option>
          {stockTickers.map((ticker) => (
            <option
              key={ticker}
              value={ticker}
            >
              {ticker}
            </option>
          ))}
        </select>
      </div>
      {selectedData.length > 0 && (
        <StockCarousel key={selectedTicker} stockDataListProps={selectedData}/>
      )}
    </>
  );
}

export default StockDropdown;
