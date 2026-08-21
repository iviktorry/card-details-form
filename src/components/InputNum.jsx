export default function InputNum({ label, ...props }) {
  return (
    <>
      {label && (
        <label className="uppercase" htmlFor={props.id}>
          {label}
        </label>
      )}
      <input {...props} className="" />
    </>
  );
}
