import { useState } from "react";
import Cards from "./Cards";
import Form from "./Form";
import FinishScreen from "./FinishScreen";

export default function App() {
  const [errors, setErrors] = useState({});
  const [cardValues, setCardValues] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  function formatCardNumber(value) {
    const rawDigits = value.replace(/\D/g, "");
    const parts = rawDigits.match(/.{1,4}/g);
    return parts ? parts.join(" ") : "";
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    const { name, cardNumber, month, year, cvc } = data;

    const newErrors = {};

    if (!name.trim()) newErrors.name = "Can't be blank!";
    if (!name.trim().includes(" "))
      newErrors.name = "Provide name with surname";
    if (!cardNumber.trim()) newErrors.cardNumber = "Can't be blank!";
    if (!month.trim()) newErrors.month = "Can't be blank!";
    if (!year.trim()) newErrors.year = "Can't be blank!";
    if (!cvc.trim()) newErrors.cvc = "Can't be blank!";

    if (cvc && cvc.length < 3) newErrors.cvc = "Provide full info";
    if (month && month.length < 2) newErrors.month = "Provide full info";
    if (month && month > 12) newErrors.month = "Provide correct month";
    if (year && year.length < 2) newErrors.year = "Provide full info";

    if (cardNumber && cardNumber.trim().length < 16) {
      newErrors.cardNumber = "Provide full card number";
    }

    const cleanedCardNumber = cardNumber.replace(/\s+/g, "");
    if (/\D/.test(cleanedCardNumber)) {
      newErrors.cardNumber = "Wrong format, numbers only";
    }

    setErrors(newErrors);

    const isValid = Object.keys(newErrors).length === 0;

    if (isValid) {
      console.log("success");
      const formattedData = {
        ...data,
        cardNumber: formatCardNumber(cardNumber),
      };

      setCardValues(formattedData);
      setIsFinished(false);
    } else {
      console.log("error");
    }
  }

  return (
    <div className="min-h-screen flex flex-col font-sans font-medium lg:flex-row lg:h-screen">
      <aside className="w-full h-60 bg-cover flex justify-center bg-center relative text-white bg-[url('./assets/bg-main-mobile.png')] lg:h-screen lg:bg-[url('./assets/bg-main-desktop.png')] lg:w-3/10 ">
        <Cards cardValues={cardValues} />
      </aside>
      <main className="px-6 flex justify-center items-center flex-1 text-black my-[18%] lg:justify-end lg:my-0 lg:px-0 lg:pl-20 ">
        {isFinished ? (
          <FinishScreen />
        ) : (
          <Form handleSubmit={handleSubmit} errors={errors} />
        )}
      </main>
    </div>
  );
}
