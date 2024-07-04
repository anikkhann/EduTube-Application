import React, { useState } from "react";
import { useGetTagsQuery } from "../../features/api/apiSlice";
import TagLoader from "../ui/loaders/TagLoader";
import Error from "../ui/Error";
import Tag from "./Tag";
// import Videos from "../videos/Videos";
// import searchImage from "../../assets/search.svg";
const Tags = ({ selectedTags, setSelectedTags }) => {
  const {
    data: tags,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTagsQuery();

  //if selected tags already exist on selectedTags array then keep rest tags excluding selected tag
  //else set selected tags to selectedTags array
  const handleTagSelection = (title) => {
    if (selectedTags.includes(title)) {
      setSelectedTags(selectedTags.filter((tag) => tag !== title));
    } else {
      setSelectedTags([...selectedTags, title]);
    }
  };

  //decide what to render
  let content = null;
  if (isLoading) {
    content = (
      <>
        <TagLoader />
        <TagLoader />
        <TagLoader />
        <TagLoader />
        <TagLoader />
      </>
    );
  }
  if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  }
  if (!isLoading && !isError && tags?.length === 0) {
    content = <Error message="No Tags Found" />;
  }
  if (!isLoading && !isError && tags?.length > 0) {
    content = tags.map((tag) => (
      <Tag
        key={tag.id}
        tag={tag}
        handleTagSelection={handleTagSelection}
        selectedTags={selectedTags}
      />
    ));
  }
  return (
    // <>
    //   <h2 className="grid grid-cols-12 text-lg font-semibold text-violet-600">Categories</h2>

    //   {/* {selectedTags.length > 0 && <Videos selectedTags={selectedTags} />} */}
    //   {/* <Videos selectedTags={selectedTags} input={input}/> */}
    // </>
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        
      
       {content}

      </div>
    </section>
  );
};

export default Tags;
