import cardFront from "../assets/bg-card-front.png";
import cardBack from "../assets/bg-card-back.png";
import cardLogo from "../assets/card-logo.svg";

export default function Cards() {
  return (
    <>
      <div className="w-4/5 max-h-40 max-w-70 z-1 absolute top-10 right-5">
        <img className="" src={cardBack} alt="Card back side" />
        <p className="absolute z-2 top-[44%] text-gray-200 right-10 text-xs">
          000
        </p>
      </div>
      <div className="absolute -bottom-13 left-5 z-4 w-4/5 max-h-40 max-w-70 ">
        <img className="z-5" src={cardFront} alt="Card front side" />
        <img
          className="z-6 top-5 left-5 absolute max-h-7"
          src={cardLogo}
          alt="Card logo"
        />
        <div className="flex flex-col gap-2 justify-center bottom-18 relative px-5">
          <p className=" z-6 text-lg tracking-widest  ">0000 0000 0000 0000</p>
          <div className="flex justify-between">
            <p className="text-xs uppercase">John Doe</p>
            <p className="text-xs">00/00</p>
          </div>
        </div>
      </div>
    </>
  );
}
