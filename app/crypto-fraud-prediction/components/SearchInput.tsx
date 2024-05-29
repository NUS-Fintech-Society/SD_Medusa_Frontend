import { PiMagnifyingGlassBold } from "react-icons/pi";
import React, {useState} from "react";

interface SearchComponentProps {
  onSearch: (query: string) => void;
}

const SearchInput : React.FC<SearchComponentProps> = ({ onSearch }) => {
  const [input, setInput] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setInput(e.target.value);
   
  }

  const handleSearch = () => {
    onSearch;
    console.log(input);
  }

  return (
    <div className="mx-auto w-3/4 mt-14 flex items-center justify-end">
      <input
        className="w-full m-auto bg-[#323B64] h-16 pl-8 placeholder:text-[#FFFFFFCC] placeholder:opacity-80
                rounded-md"
        type="text"
        placeholder="Key in the address"
        value = {input}
        onChange = {handleChange}
      />
      <PiMagnifyingGlassBold
        size={30}
        className="text-brand-yellow absolute mr-4"
        onClick = {handleSearch}
      />
    </div>
  );
};

export default SearchInput;
