import finishImg from "../assets/icon-complete.svg";
import Button from "./Button";

export default function FinishScreen() {
  return (
    <div className="flex flex-col gap-5 items-center mx-auto lg:w-3/7 xl:w-2/5">
      <img src={finishImg} className="max-w-20" alt="Complete image" />
      <h2 className="uppercase text-2xl tracking-widest">Thank you!</h2>
      <p className="text-gray-400 pb-6">We've added your card details</p>
      <Button />
    </div>
  );
}
