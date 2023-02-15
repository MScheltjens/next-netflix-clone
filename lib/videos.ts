import { TApiResponse, TApiVideo } from "@/types/types";

export const getVideos = async (searchQuery: string) => {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${searchQuery}&type=video&key=${process.env.YOUTUBE_API_KEY}`
  );

  if (!response.ok) {
    throw new Error(response.statusText, { cause: response.status });
  }

  const data: TApiResponse = await response.json();

  return data.items.map((item) => ({
    title: item.snippet.title,
    imgUrl: item.snippet.thumbnails.high.url,
    id: item?.id?.videoId,
  }));
};
