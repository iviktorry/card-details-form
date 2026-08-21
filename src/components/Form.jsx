import InputNum from "./InputNum";

export default function Form() {
  return (
    <form noValidate>
      <div>
        <InputNum
          label="cardholder name"
          id="name"
          name="name"
          type="text"
          placeholder="e.g. Jane Appleseed"
        />
      </div>
      <div>
        <InputNum
          label="card number"
          type="text"
          id="card-number"
          name="card-number"
          placeholder="eg. 1234 5678 9123 0000"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength="19"
        />
      </div>
      <div>
        <fieldset>
          <legend>exp. date (mm/yy)</legend>
          <div>
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
        <div>
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
      </div>
    </form>
  );
}
