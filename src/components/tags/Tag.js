import React from "react";

const Tag = ({ tag, handleTagSelection, selectedTags }) => {
  const { id, title } = tag;

  const isSelected = selectedTags.includes(title) ? true : false;

  const style = isSelected
    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";

  return (
    <div className={style} onClick={() => handleTagSelection(title)}>
      {title}
    </div>
  );
};

export default Tag;
