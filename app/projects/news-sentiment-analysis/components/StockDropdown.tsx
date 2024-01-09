"use client";

import { useState } from "react";
import { SampleStockData } from "@/data/SampleStockData";
import StockSelect from "./StockSelect";
import { StockData } from "@/types/StockData";
import StockGrid from "./StockGrid";

export interface StockDataProps {
  [stockTicker: string]: StockData[];
}

function StockDropdown({ stockDataProps }: { stockDataProps: StockDataProps }) {
  const stockTickers = Object.keys(stockDataProps); // Get an array of stock tickers
  const [selectedTicker, setSelectedTicker] = useState("");
  const [selectedData, setSelectedData] = useState<StockData[]>([]); // State to store the selected data

  const handleSelectTicker = (newTicker: string) => {
    // Call setSelected to update the state
    setSelectedTicker(newTicker);

    // Retrieve the data based on the selected ticker
    if (newTicker in SampleStockData) {
      setSelectedData(SampleStockData[newTicker]);
    } else {
      setSelectedData([]); // Reset the data if the ticker is not found
    }
  };

  return (
    <>
      <div className="m-4 w-3/4 lg:w-4/5 flex justify-center z-10">
        <StockSelect stockTickerList={stockTickers} setTicker={handleSelectTicker}/>
      </div>
      {selectedData.length > 0 && (
        <StockGrid key={selectedTicker} stockDataListProps={selectedData}/>
      )}
    </>
  );
}

export default StockDropdown;
