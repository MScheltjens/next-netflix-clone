import { TApiResponse } from "@/types/types";

export const getCommonVideos = async (URL: string) => {
  const BASE_URL = "https://youtube.googleapis.com/youtube/v3";
  try {
    const response = await fetch(
      `${BASE_URL}/${URL}&maxResults=25&key=${process.env.YOUTUBE_API_KEY}`
    );

    const data: TApiResponse = await response.json();

    if (!response.ok) {
      throw new Error(response.statusText, {
        cause: response.status,
      });
    }

    return data.items.map((item) => {
      const id = item.id?.videoId || item.id;
      return {
        title: item.snippet.title,
        imgUrl: item.snippet.thumbnails.high.url,
        id,
      };
    });
  } catch (error) {
    console.error("Something went wrong with video library", error);
    return [];
  }
};

export const getVideos = (searchQuery: string) => {
  const URL = `search?part=snippet&q=${searchQuery}&type=video`;
  return getCommonVideos(URL);
};

export const getPopularVideos = () => {
  const URL =
    "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=BE";
  return getCommonVideos(URL);
};
