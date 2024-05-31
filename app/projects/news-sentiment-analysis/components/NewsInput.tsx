import { useState } from 'react';

function NewsInput({ setTicker }: { setTicker: (selectedTicker: string) => void; }) {
  const [headline, setHeadline] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeadline(event.target.value);
    setTicker(event.target.value);
  };

  return (
    <div className="w-72 lg:w-3/4">
      <div className="relative mt-1">
        <input
          type="text"
          value={headline}
          onChange={handleChange}
          className="relative w-full rounded-md 
          bg-[#323B64] py-2 pl-3 pr-10 text-left lg:py-5 lg:pl-10 lg:pr-10
          shadow-md text-body-l text-ftnal-white"
          placeholder="Enter news headline"
        />
      </div>
    </div>
  );
}

export default NewsInput;
