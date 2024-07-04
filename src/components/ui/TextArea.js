export default function TextArea({ title, ...attributes }) {
    return (
        <>
            <label className="block text-sm font-medium text-gray-700">
                {title}
            </label>
            <div className="mt-1">
                <textarea
                    {...attributes}
                    rows={8}   // Number of visible rows
                    cols={40} // Adjusted cols to 40 for a wider textarea
                   
                    className="peer  font-medium bg-transparent h-20 rounded-lg text-slate-800 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                ></textarea>
            </div>
            <p className="mt-2 text-sm text-gray-500">
                Brief description for your video
            </p>
        </>
    );
}
