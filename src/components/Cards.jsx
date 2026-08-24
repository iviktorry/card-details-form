import cardFront from "../assets/bg-card-front.png";
import cardBack from "../assets/bg-card-back.png";
import cardLogo from "../assets/card-logo.svg";

export default function Cards() {
  return (
    <div className="mx-5 mt-7.5 h-50 relative max-w-93 sm:max-w-105 md:max-w-120 lg:mx-0 lg:mt-23 xl:"> 
      <div className="absolute top-0 right-0 w-[85%] z-10 lg:w-[110%] lg:left-[50%] lg:top-[115%]  ">
        <div className="relative">
          <img className="w-full" src={cardBack} alt="Card back side" />
          <p className="absolute z-30 top-[44%] right-[0%] text-right mr-8 text-gray-200 text-xs tracking-widest sm:right-[3%] sm:top-[45%]">
            000
          </p>
        </div>
      </div>

      <div className="relative bottom-0 left-0 w-[85%] z-20 mt-[27%] lg:w-[110%] lg:mt-0 lg:left-[30%]">
        <div className="relative">
          <img className="w-full" src={cardFront} alt="Card front side" />
          <img
            className="absolute top-[18%] left-[7%] h-[17%]"
            src={cardLogo}
            alt="Card logo"
          />

          <p className="absolute top-[54%] left-[7%] right-[4%] whitespace-nowrap tracking-widest overflow-hidden sm:text-2xl lg:text-xl">
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

// export default function Cards() {
//   return (
//     <div className="mx-5 mt-10 h-42 relative max-w-72.5">
//       <div className="absolute top-0 right-0 w-[72%] z-10">
//         <div className="relative pt-[22%]">
//           <img className="w-full" src={cardBack} alt="Card back side" />
//           <p className="absolute bottom-[22%] right-[8%] text-right mr-8 text-gray-200 text-xs tracking-widest">
//             000
//           </p>
//         </div>
//       </div>

//       <div className="relative bottom-0 left-0 w-[72%] z-20">
//         <div className="relative">
//           <img className="w-full" src={cardFront} alt="Card front side" />
//           <img
//             className="absolute top-[18%] left-[7%] h-[17%]"
//             src={cardLogo}
//             alt="Card logo"
//           />

//           <p className="absolute top-[54%] left-[7%] right-[4%] whitespace-nowrap overflow-hidden">
//             0000 0000 0000 0000
//           </p>
//           <div className="absolute bottom-[12%] left-[7%] right-[7%] flex justify-between">
//             <p className="text-xs uppercase">John Doe</p>
//             <p className="text-xs">00/00</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
