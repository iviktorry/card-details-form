import Form from "./Form";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans font-medium lg:flex-row ">
      <aside className="w-full h-60 bg-cover bg-center bg-[url('./assets/bg-main-mobile.png')] lg:h-screen lg:w-121 lg:bg-[url('./assets/bg-main-desktop.png')]"></aside>
      <main className="px-6 flex justify-center items-center flex-1 text-black ">
        <Form />
      </main>
    </div>
  );
}
