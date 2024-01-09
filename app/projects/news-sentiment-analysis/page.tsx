import StockDropdown, { StockDataProps } from "./components/StockDropdown";
import { SampleStockData } from "@/data/SampleStockData";

const Projects = () => {

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
      <StockDropdown stockDataProps={SampleStockData} />
    </div>
  );
};

export default Projects;
