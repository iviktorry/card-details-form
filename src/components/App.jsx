// import { bgMainMobile } from "../assets/bg-main-mobile.png";
// import { bgMainDesktop } from "../assets/bg-main-desktop.png";
import Form from "./Form";

export default function App() {
  return (
    <div className="min-h-lvh">
      <div className="flex flex-col lg:flex-row">
        <aside className="w-full h-60 font-serif bg-cover bg-center bg-[url('./assets/bg-main-mobile.png')] lg:h-screen lg:w-121 lg:bg-[url('./assets/bg-main-desktop.png')]"></aside>
        <main className="text-black">
          <Form />
        </main>
      </div>
    </div>
  );
}
