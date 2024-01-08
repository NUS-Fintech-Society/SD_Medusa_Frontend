import { PiMagnifyingGlassBold } from "react-icons/pi";

const SearchInput = () => {
  return (
    <div className="mx-auto w-3/4 mt-14 flex items-center justify-end">
      <input
        className="w-full m-auto bg-[#323B64] h-16 pl-8 placeholder:text-[#FFFFFFCC] placeholder:opacity-80
                rounded-md"
        type="text"
        placeholder="Key in the address"
      />
      <PiMagnifyingGlassBold
        size={30}
        className="text-brand-yellow absolute mr-4"
      />
    </div>
  );
};

export default SearchInput;
