import { Box, HStack, Link, VStack } from "@chakra-ui/react";
import { StockData } from "../../../../types/StockData";

function StockCard({ stockData }: { stockData: StockData }) {
  let borderColorClass;

  if (stockData.Score < 0) {
    borderColorClass = 'border-t-[1rem] border-accent-red';
  } else if (stockData.Score > 0) {
    borderColorClass = 'border-t-[1rem] border-accent-green';
  } else {
    borderColorClass = 'border-t-[1rem] border-ftnal-lightgrey';
  }
  return (
    <div className={`w-full flex flex-row justify-between p-5 lg:p-5 lg:w-1/3 rounded-lg bg-ftnal-white border-t-[1rem] ${borderColorClass} bg-ftnal-white`}>
      <HStack>
        <VStack className="w-1/2 lg:w-1/3">
          <p className="text-brand-yellow text-body-s lg:text-h3-l text-center">{stockData.Date}</p>
          <p className="text-brand-yellow text-body-s lg:text-h4-s">{stockData.Time}</p>
        </VStack>
        <Link
          href={stockData.Link}
          className="px-2 text-center text-body-s text-ftnal-black underline md:text-h4-s w-3/4"
          isExternal
        >
          {stockData.Name}
        </Link>
      </HStack>
    </div>
  );
}

export default StockCard;