export default function Button({ resetCardValues, isFinished }) {
  return (
    <button
      type="submit"
      onClick={resetCardValues}
      className="bg-purple-950 text-white py-4 rounded-lg tracking-wide w-full"
    >
      {isFinished ? "Continue" : "Confirm"}
    </button>
  );
}
