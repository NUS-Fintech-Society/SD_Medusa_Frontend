import StockCard from "./components/StockCard";
import StockCarousell from "./components/StockCarousell";
import StockDropdown, { StockData, StockDataProps } from "./components/StockDropdown";
import { SampleStockData } from "@/data/SampleStockData";

const Projects = () => {

  return (
    <div
      className="
                lg:block
                h-[calc(100vh-4rem)] 
                min-w-screen
                bg-brand-blue
                flex
                flex-col
                items-center
                lg:flex
                lg:flex-col
                lg:items-center
            "
    >
      <p className="text-h2-s md:text-h1-l text-center text-brand-yellow tracking-wider">
        Stock Sentiment API
      </p>
      <StockDropdown stockDataProps={SampleStockData} />
    </div>
  );
};

export default Projects;
