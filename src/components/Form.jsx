export default function Form() {
  return (
    <form noValidate>
      <div>
        <label htmlFor="name">cardholder name</label>
        <input
          type="text"
          placeholder="e.g. Jane Appleseed"
          id="name"
          name="name"
        />
      </div>
      <div>
        <label htmlFor="card-number">card number</label>
        <input
          type="text"
          inputMode="numeric"
          maxLength={19}
          pattern="[0-9]*"
          placeholder="eg. 1234 5678 9123 0000"
          id="card-number"
          name="card-number"
        />
      </div>
      <div>
        <fieldset>
          <legend>exp. date (mm/yy)</legend>
          <div>
            <input
              type="text"
              inputMode="numeric"
              placeholder="MM"
              maxLength={2}
              pattern="[0-9]*"
              id="month"
              name="month"
              aria-label="Expiration month"
              className=""
            />
            <input
              type="text"
              inputMode="numeric"
              maxLength={2}
              pattern="[0-9]*"
              placeholder="YY"
              id="year"
              name="year"
              aria-label="Expiration year"
              className=""
            />
          </div>
        </fieldset>
        <div>
          <label htmlFor="cvc">cvc</label>
          <input
            type="text"
            inputMode="numeric"
            maxLength={3}
            pattern="[0-9]*"
            placeholder="e.g. 123"
            id="cvc"
            name="cvc"
            className=""
          />
        </div>
      </div>
    </form>
  );
}
