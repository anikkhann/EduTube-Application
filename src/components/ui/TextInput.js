export default function TextInput({ title, ...attributes }) {
  return (
    <>
      <label className="block text-sm font-medium text-gray-700">{title}</label>
      <input
        type="text"
        className="peer  font-medium bg-transparent h-10 w-72 rounded-lg text-slate-800 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
        // className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        {...attributes}
      />
    </>
  );
}
