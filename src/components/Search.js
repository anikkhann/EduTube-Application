import React from "react";
import searchImage from "../assets/search.svg";
const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    // <div classNameNameName="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">

    //   <input
    //     classNameNameName="outline-none border-none mr-2"
    //     type="search"
    //     name="search"
    //     placeholder="Search"
    //     value={searchTerm}
    //     onChange={(e) => setSearchTerm(e.target.value)}
    //   />
    //     <img
    //     classNameNameName="inline h-4 cursor-pointer"
    //     src={searchImage}
    //     alt="Search"
    //   />
    // </div>
    <div className="bg-white p-4 rounded-lg max-w-7xl mx-auto lg:px-3 flex gap-2 border-b overflow-y-auto">
      <div className="relative bg-inherit">
        <input
          type="search"
          id="search"
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="peer  font-medium bg-transparent h-10 w-72 rounded-lg text-slate-800 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
        />
        <label
          for="search"
          className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
        >
          Search
        </label>
      </div>
    </div>
  );
};

export default Search;
