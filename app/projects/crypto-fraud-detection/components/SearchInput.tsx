import { PiMagnifyingGlassBold } from "react-icons/pi";

const SearchInput = () => {
  return (
    <div className="m-auto w-3/4 mt-14 flex items-center">
      <input
        className="w-full m-auto bg-[#323B64] h-16 pl-8 placeholder:text-[#FFFFFFCC] placeholder:opacity-80
                rounded-md"
        type="text"
        placeholder="Key in the address"
      />
      <PiMagnifyingGlassBold
        size={30}
        className="text-brand-yellow relative right-12"
      />
    </div>
  );
};

export default SearchInput;
