import Form from "./Form";
import cardFront from "../assets/bg-card-front.png";
import cardBack from "../assets/bg-card-back.png";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans font-medium lg:flex-row ">
      <aside className="w-full h-60 bg-cover bg-center relative bg-[url('./assets/bg-main-mobile.png')] lg:h-screen lg:w-121 lg:bg-[url('./assets/bg-main-desktop.png')]">
        <img
          className="w-4/5 max-h-40 max-w-70 z-1 absolute top-10 right-5"
          src={cardBack}
          alt="Card back side"
        />
        <img
          className="w-4/5 max-h-40 max-w-70 z-2 absolute -bottom-10 left-5"
          src={cardFront}
          alt="Card front side"
        />
      </aside>
      <main className="px-6 flex justify-center items-center flex-1 text-black my-15">
        <Form />
      </main>
    </div>
  );
}
