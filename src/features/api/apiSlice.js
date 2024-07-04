import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9001",
  }),
  tagTypes: ["Videos", "Video", "RelatedVideos"],
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: ({ selectedTags, search }) => {
        // Base URL for videos
        let queryString = "/videos";

        // Construct query based on selectedTags and search
        const tagsQuery =
          selectedTags.length > 0
            ? selectedTags.map((tag) => `tags_like=${tag}`).join("&")
            : "";
        const searchQuery = search ? `q=${search}` : "";

        // Combine query parts
        //  [tagsQuery, searchQuery].filter(Boolean) will remove any empty strings or other falsy values from the array.
        const combinedQuery = [tagsQuery, searchQuery]
          .filter(Boolean)
          .join("&");

        // checks if combinedQuery is not empty.
        if (combinedQuery) {
          queryString += `?${combinedQuery}`;
        }

        return queryString;
      },
      //if i want to refetch videos data within 1 sec
      keepUnusedDataFor: 1,
      providesTags: ["Videos"],
    }),
    getVideo: builder.query({
      query: (videoId) => `/videos/${videoId}`,
      providesTags: (result, error, arg) => [{ type: "Video", id: arg }],
    }),
    getRelatedVideo: builder.query({
      // /videos?title_like=react&title_like=css
      query: ({ id, title }) => {
        //convert string to string array
        const tags = title.split(" ");
        const likes = tags.map((tag) => `title_like=${tag}`);
        const queryString = `/videos?${likes.join("&")}&_limit=4`;
        return queryString;
      },
      providesTags: (result, error, arg) => [
        { type: "RelatedVideoS", id: arg.id },
      ],
    }),
    getTags: builder.query({
      query: () => ({
        url: "/tags",
        method: "GET",
      }),
    }),

    addVideo: builder.mutation({
      query: (data) => ({
        url: "/videos",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Videos"],
    }),
    editVideo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/videos/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Videos",
        { type: "Video", id: arg.id },
        { type: "RelatedVideos", id: arg.id },
      ],
    }),
    deleteVideo: builder.mutation({
      query: (id) => ({
        url: `/videos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Videos"],
    }),
  }),
});
export const {
  useGetVideosQuery,
  useGetVideoQuery,
  useGetRelatedVideoQuery,
  useGetTagsQuery,

  useAddVideoMutation,
  useEditVideoMutation,
  useDeleteVideoMutation,
} = apiSlice;
