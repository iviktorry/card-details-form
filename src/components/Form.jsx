import InputNum from "./InputNum";
import Button from "./Button";

export default function Form() {
  function handleSubmit(formData) {
    const data = Object.fromEntries(formData);
    const { name, cardNumber, month, year, cvc } = data;

    if (
      cardNumber.trim() === "" ||
      month.trim() === "" ||
      year.trim() === "" ||
      cvc.trim() === ""
    ) {
      console.log("error");
    }
  }

  return (
    <form
      noValidate
      action={handleSubmit}
      className="flex flex-col gap-5 mx-auto lg:w-3/7 xl:w-2/5"
    >
      <InputNum
        label="cardholder name"
        id="name"
        name="name"
        type="text"
        placeholder="e.g. Jane Appleseed"
      />
      <InputNum
        label="card number"
        type="text"
        id="cardNumber"
        name="cardNumber"
        placeholder="eg. 1234 5678 9123 0000"
        inputMode="numeric"
        pattern="[0-9]*"
        maxLength="19"
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
        />
      </div>

      <Button />
    </form>
  );
}
