import InputNum from "./InputNum";
import Button from "./Button";
import { useState } from "react";

export default function Form() {
  const [errors, setErrors] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    const { name, cardNumber, month, year, cvc } = data;

    const newErrors = {};

    if (!name.trim()) newErrors.name = "Can't be blank!";
    if (!cardNumber.trim()) newErrors.cardNumber = "Can't be blank!";
    if (!month.trim()) newErrors.month = "Can't be blank!";
    if (!year.trim()) newErrors.year = "Can't be blank!";
    if (!cvc.trim()) newErrors.cvc = "Can't be blank!";

    if (cvc && cvc.length < 3) newErrors.cvc = "Provide full info";
    if (month && month.length < 2) newErrors.month = "Provide full info";
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
    } else {
      console.log("error");
    }
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 mx-auto lg:w-3/7 xl:w-2/5"
    >
      <InputNum
        label="cardholder name"
        id="name"
        name="name"
        type="text"
        placeholder="e.g. Jane Appleseed"
        error={errors?.name}
      />
      <InputNum
        label="card number"
        type="text"
        id="cardNumber"
        name="cardNumber"
        placeholder="eg. 1234 5678 9123 0000"
        inputMode="numeric"
        pattern="[0-9]*"
        maxLength="16"
        error={errors?.cardNumber}
      />
      <div className="grid grid-cols-2 gap-4 items-start">
        <fieldset className="">
          <legend className="uppercase text-xs tracking-widest mb-2 text-nowrap">
            exp. date (mm/yy)
          </legend>
          <div className="flex gap-2">
            <InputNum
              type="text"
              id="month"
              name="month"
              placeholder="MM"
              aria-label="Expiration month"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength="2"
              error={errors?.month}
            />
            <InputNum
              type="text"
              id="year"
              name="year"
              placeholder="YY"
              aria-label="Expiration year"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength="2"
              error={errors?.year}
            />
          </div>
        </fieldset>
        <InputNum
          label="cvc"
          type="text"
          id="cvc"
          name="cvc"
          placeholder="e.g. 123"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength="3"
          error={errors?.cvc}
        />
      </div>

      <Button />
    </form>
  );
}
