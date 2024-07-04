import { useState, useEffect } from "react";
import { useEditVideoMutation } from "../../features/api/apiSlice";
import { useNavigate } from "react-router-dom";
import Error from "../ui/Error";
import Success from "../ui/Success";
import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";
import { toast } from "react-toastify";

export default function Form({ video }) {
  const navigate = useNavigate();
  const [hasDisplayedSuccessToast, setHasDisplayedSuccessToast] =
    useState(false);
  const [hasDisplayedErrorToast, setHasDisplayedErrorToast] = useState(false);

  const {
    id,
    title: initialTitle,
    author: initialAuthor,
    description: initialDescription,
    link: initialLink,
    thumbnail: initialThumbnail,
    date: initialDate,
    duration: initialDuration,
    views: initialViews,
  } = video;

  const [editVideo, { isLoading, isError, isSuccess }] = useEditVideoMutation();

  const [title, setTitle] = useState(initialTitle);
  const [author, setAuthor] = useState(initialAuthor);
  const [description, setDescription] = useState(initialDescription);
  const [link, setLink] = useState(initialLink);
  const [thumbnail, setThumbnail] = useState(initialThumbnail);
  const [date, setDate] = useState(initialDate);
  const [duration, setDuration] = useState(initialDuration);
  const [views, setViews] = useState(initialViews);

  const handleSubmit = (e) => {
    e.preventDefault();
    editVideo({
      id,
      data: {
        title,
        description,
        author,
        link,
        thumbnail,
        date,
        duration,
        views,
      },
    });
  };
  //after delete if we get success then navigate to home page
  useEffect(() => {
    if (isSuccess && !hasDisplayedSuccessToast) {
      toast.success("Video was edited successfully");
      setHasDisplayedSuccessToast(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [isSuccess, hasDisplayedSuccessToast, navigate]);

  useEffect(() => {
    if (isError && !hasDisplayedErrorToast) {
      toast.error("There was an error editing video!");
      setHasDisplayedErrorToast(true);
    }
  }, [isError, hasDisplayedErrorToast]);

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <div className="shadow overflow-hidden sm:rounded-md rounded-lg bg-white hover:bg-green-200 hover:border-blue-400 hover:scale-[1.03] transition duration-300 ease-in-out">
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-1">
              <TextInput
                title="Video title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="col-span-1">
              <TextInput
                title="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>

            <div className="col-span-1">
              <TextArea
                title="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="col-span-1">
              <TextInput
                title="YouTube Video link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>

            <div className="col-span-1">
              <TextInput
                title="Thumbnail link"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
              />
            </div>

            <div className="col-span-1">
              <TextInput
                title="Upload Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="col-span-1">
              <TextInput
                title="Video Duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>

            <div className="col-span-1">
              <TextInput
                title="Video no of views"
                value={views}
                onChange={(e) => setViews(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            disabled={isLoading}
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
        {/* {isSuccess && (
                    toast.success("Video was added successfully")
                    // <Success message="Video was edited successfully" />
                )}
                {isError && (
                    toast.error("There was an error editing video!")
                    // <Error message="There was an error adding video!" />
                )} */}
        {/* {isSuccess && (
                    <Success message="Video was edited successfully" />
                )}
                {isError && (
                    <Error message="There was an error editing video!" />
                )} */}
      </div>
    </form>
  );
}
