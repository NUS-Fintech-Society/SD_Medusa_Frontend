import Image from "next/image";
import Button from "../components/inputs/Button";
import ButtonTabs from "../components/inputs/Tabs";

export default function Home() {
  const data = [
    { label: "Tab 1", isFirst: true },
    { label: "Tab 2" },
    { label: "Tab 3", isLast: true },
  ];

  return (
    <div
      className="
      flex
      min-h-full
      flex-col
      justify-center
      bg-slate-100
      "
    >
      <div className="container sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="Fintech Society Logo"
          height="500"
          width="500"
          src="/images/black-fintech-logo-cropped.png"
          className="mx-auto w-auto"
        />
      </div>

      <div className="min-h-screen flex">
        <div className="flex-col items-center justify-center content-center max-w-4xl mx-auto p-10">
          <h2
            className="
            text-center
            text-h1-s
            font-bold
            text-gray-900
            mb-10
          "
          >
            Colours
          </h2>
          <ul className="grid grid-cols-1 gap-4 mb-10 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
            <li className="bg-brand-yellow rounded-lg shadow-xl">
              <div className="h-24 flex items-center justify-center text-center font-bold text-ftnal-white text-body-s lg:text-body-l">
                brand-yellow
              </div>
            </li>
            <li className="bg-brand-blue rounded-lg shadow-xl">
              <div className="h-24 flex items-center justify-center text-center font-bold text-ftnal-white text-body-s lg:text-body-l">
                brand-blue
              </div>
            </li>
            <li className="bg-ftnal-black rounded-lg shadow-xl">
              <div className="h-24 flex items-center justify-center text-center font-bold text-ftnal-white text-body-s lg:text-body-l">
                ftnal-black
              </div>
            </li>
            <li className="bg-ftnal-white rounded-lg shadow-xl">
              <div className="h-24 flex items-center justify-center font-bold text-ftnal-black text-body-s lg:text-body-l">
                ftnal-white
              </div>
            </li>
            <li className="bg-ftnal-lightgrey rounded-lg shadow-xl">
              <div className="h-24 flex items-center justify-center font-bold text-ftnal-black text-body-s lg:text-body-l">
                ftnal-lightgrey
              </div>
            </li>
            <li className="bg-ftnal-lightpink rounded-lg shadow-xl">
              <div className="h-24 flex items-center justify-center font-bold text-ftnal-black text-body-s lg:text-body-l">
                ftnal-lightpink
              </div>
            </li>
            <li className="bg-ftnal-offwhite rounded-lg shadow-xl">
              <div className="h-24 flex items-center justify-center font-bold text-ftnal-black text-body-s lg:text-body-l">
                ftnal-offwhite
              </div>
            </li>
            <li className="bg-ftnal-cream rounded-lg shadow-xl">
              <div className="h-24 flex items-center justify-center font-bold text-ftnal-black text-body-s lg:text-body-l">
                ftnal-cream
              </div>
            </li>
            <li className="bg-fdbk-green rounded-lg shadow-xl">
              <div className="h-24 flex items-center justify-center font-bold text-ftnal-black text-body-s lg:text-body-l">
                fdbk-green
              </div>
            </li>
            <li className="bg-fdbk-red rounded-lg shadow-xl">
              <div className="h-24 flex items-center justify-center font-bold text-ftnal-black text-body-s lg:text-body-l">
                fdbk-red
              </div>
            </li>
            <li className="bg-fdbk-purple rounded-lg shadow-xl">
              <div className="h-24 flex items-center justify-center font-bold text-ftnal-black text-body-s lg:text-body-l">
                fdbk-purple
              </div>
            </li>
            <li className="bg-fdbk-blue rounded-lg shadow-xl">
              <div className="h-24 flex items-center justify-center font-bold text-ftnal-black text-body-s lg:text-body-l">
                fdbk-blue
              </div>
            </li>
            <li className="bg-accent-blue rounded-lg shadow-xl">
              <div className="h-24 flex items-center justify-center font-bold text-ftnal-black text-body-s lg:text-body-l">
                accent-blue
              </div>
            </li>
            <li className="bg-accent-orange rounded-lg shadow-xl">
              <div className="h-24 flex items-center justify-center font-bold text-ftnal-black text-body-s lg:text-body-l">
                accent-orange
              </div>
            </li>
            <li className="bg-accent-green rounded-lg shadow-xl">
              <div className="h-24 flex items-center justify-center font-bold text-ftnal-black text-body-s lg:text-body-l">
                accent-green
              </div>
            </li>
            <li className="bg-accent-red rounded-lg shadow-xl">
              <div className="h-24 flex items-center justify-center font-bold text-ftnal-black text-body-s lg:text-body-l">
                accent-red
              </div>
            </li>
            <li className="bg-accent-yellow rounded-lg shadow-xl">
              <div className="h-24 flex items-center justify-center font-bold text-ftnal-black text-body-s lg:text-body-l">
                accent-yellow
              </div>
            </li>
            <li className="bg-accent-purple rounded-lg shadow-xl">
              <div className="h-24 flex items-center justify-center font-bold text-ftnal-black text-body-s lg:text-body-l">
                accent-purple
              </div>
            </li>
            <li className="bg-accent-aqua rounded-lg shadow-xl">
              <div className="h-24 flex items-center justify-center font-bold text-ftnal-black text-body-s lg:text-body-l">
                accent-aqua
              </div>
            </li>
          </ul>

          <h2
            className="
            text-center
            text-h1-s
            font-bold
            text-gray-900
            mb-10
          "
          >
            Buttons
          </h2>
          <ul className="grid grid-cols-1 gap-4 mb-10 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
            <li className="rounded-lg flex items-center justify-center">
              <Button colour="brand-blue">Brand-Blue</Button>
            </li>
            <li className="rounded-lg flex items-center justify-center">
              <Button colour="brand-yellow">Brand-Yellow</Button>
            </li>
            <li className="rounded-lg flex items-center justify-center">
              <Button colour="ftnal-white">Ftnal-White</Button>
            </li>
            <li className="rounded-lg flex items-center justify-center">
              <Button colour="accent-red">Accent-Red</Button>
            </li>
            <li className="rounded-lg flex items-center justify-center">
              <Button
                colour="brand-yellow"
                disabled={true}
              >
                Disabled
              </Button>
            </li>
          </ul>

          <h2
            className="
            text-center
            text-h1-s
            font-bold
            text-gray-900
            mb-10
          "
          >
            Tabs (Button Groups)
          </h2>
          <div className="flex justify-center">
            <ButtonTabs data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
