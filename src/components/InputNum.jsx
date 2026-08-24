export default function InputNum({ label, error, ...props }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="uppercase text-xs tracking-widest" htmlFor={props.id}>
          {label}
        </label>
      )}
      <input
        {...props}
        className={`ring rounded-sm ring-gray-200 py-2 pl-3 w-full placeholder:text-gray-200 placeholder:text-lg focus:ring-purple-950 border-none outline-none ${error ? "ring-red-500" : ""}`}
      />

      {error && <span className="text-red-500 text-xs ">{error}</span>}
    </div>
  );
}
