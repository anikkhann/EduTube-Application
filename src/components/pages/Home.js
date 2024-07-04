import React, { useState } from "react";
import Videos from "../videos/Videos";
import Tags from "../tags/Tags";
import Search from "../Search";

export const Home = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)] ">
        <div className="">
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        <div>
          <h1 className="max-w-7xl mx-auto text-lg font-semibold px-5 lg:px-0 flex gap-2 overflow-y-auto">
            Category
          </h1>
          <Tags selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
        </div>
      <>
      <h1 className="max-w-7xl mx-auto text-lg font-semibold px-5 lg:px-0 flex gap-2 overflow-y-auto">
            Videos
          </h1>
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 py-5 lg:px-0">
       
          <Videos selectedTags={selectedTags} search={searchTerm} />
        </div>
      </>
      </section>
    </>
  );
};
