export default function Button({ resetCardValues }) {
  return (
    <button
      type="submit"
      onClick={resetCardValues}
      className="bg-purple-950 text-white py-4 rounded-lg tracking-wide w-full"
    >
      Confirm
    </button>
  );
}
