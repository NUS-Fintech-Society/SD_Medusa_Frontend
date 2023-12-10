import { Box, Link, VStack } from "@chakra-ui/react";
import { StockData } from "./StockDropdown";

function StockCard({ stockData }: { stockData: StockData }) {
  return (
    <div className="flex flex-row justify-between border-b border-gray-200 p-4">
      <VStack
        align="start"
        spacing={2}
      >
        <Link
          href={stockData.Link}
          className="text-left text-body-s text-ftnal-white underline md:text-body-l"
          isExternal
        >
          {stockData.Name}
        </Link>
        <p className="text-ftnal-white text-body-s">{stockData.Time}</p>
      </VStack>
      <div className="w-8 h-8 md:w-12 md:h-12 text-body-s md:text-body-l bg-brand-yellow rounded-md flex items-center justify-center">
        {stockData.Score}
      </div>
    </div>
  );
}

export default StockCard;
