import cardFront from "../assets/bg-card-front.png";
import cardBack from "../assets/bg-card-back.png";
import cardLogo from "../assets/card-logo.svg";

export default function Cards() {
  return (
    <div className="mx-5 mt-7.5 h-50 relative max-w-93 sm:max-w-105 md:max-w-120 lg:mx-0 lg:mt-23 2xl:mt-20">
      <div className="absolute top-0 right-0 w-[85%] z-10 lg:w-[110%] lg:left-[50%] lg:top-[115%] xl:w-full xl:top-[120%] 2xl:top-[140%]">
        <div className="relative">
          <img className="w-full" src={cardBack} alt="Card back side" />
          <p className="absolute z-30 top-[44%] right-[0%] text-right mr-8 text-gray-200 text-xs tracking-widest sm:right-[3%] sm:top-[45%] 2xl:top-[46%] 2xl:right-[5%]">
            000
          </p>
        </div>
      </div>

      <div className="relative bottom-0 left-0 w-[85%] z-20 mt-[27%] lg:w-[110%] lg:mt-0 lg:left-[30%] xl:w-full">
        <div className="relative">
          <img className="w-full" src={cardFront} alt="Card front side" />
          <img
            className="absolute top-[18%] left-[7%] h-[17%]"
            src={cardLogo}
            alt="Card logo"
          />

          <p className="absolute top-[54%] left-[7%] right-[4%] whitespace-nowrap tracking-widest overflow-hidden sm:text-2xl lg:text-xl xl:text-2xl">
            0000 0000 0000 0000
          </p>
          <div className="absolute bottom-[12%] left-[7%] right-[7%] flex justify-between">
            <p className="text-xs uppercase">John Doe</p>
            <p className="text-xs">00/00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

