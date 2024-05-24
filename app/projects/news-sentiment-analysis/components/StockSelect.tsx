import { Fragment, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useState } from 'react'
import { Listbox, ListboxProps, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { StockDataProps } from './StockDropdown'
import { StockData } from '@/types/StockData'

function StockSelect({ stockTickerList, setTicker }: {stockTickerList : string[], setTicker: (selectedTicker: string) => void;}) {
  const [selected, setSelected] = useState<string | undefined>()

  const handleChange = (event: string) => {
    setSelected(event)
    setTicker(event)
  };

  return (
    <div className="w-72 lg:w-3/4">
      <Listbox value={selected} onChange={handleChange}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full rounded-md 
          bg-[#323B64] py-2 pl-3 pr-10 text-left lg:py-5 lg:pl-10 lg:pr-10
          shadow-md text-body-l text-ftnal-white">
            <span className="block truncate opacity-50">{selected ? selected : "Select a stock ticker"}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 lg:pr-5">
              <ChevronDownIcon
                className="h-10 w-10 opacity-50"
                boxSize={32}
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
            className="absolute lg:absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#323B64] 
            py-1 shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {stockTickerList.map((tickername: string, tickerIdx: Key) => (
                <Listbox.Option
                  key={tickerIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none lg:py-5 py-2 pl-10 pr-4 text-ftnal-white ${
                      active ? 'bg-[#404A73]' : ''
                    }`
                  }
                  value={tickername}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {tickername}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
export default StockSelect;
