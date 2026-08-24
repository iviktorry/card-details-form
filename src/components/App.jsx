import Cards from "./Cards";
import Form from "./Form";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans font-medium lg:flex-row lg:h-screen">
      <aside className="w-full h-60 bg-cover flex justify-center bg-center relative text-white bg-[url('./assets/bg-main-mobile.png')] lg:h-screen lg:bg-[url('./assets/bg-main-desktop.png')] lg:w-3/10 ">
        <Cards />
      </aside>
      <main className="px-6 flex justify-center items-center flex-1 text-black my-[18%] lg:justify-end lg:my-0 lg:px-0 lg:pl-20 ">
        <Form />
      </main>
    </div>
  );
}
