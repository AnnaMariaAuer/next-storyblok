import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

export default async function Home() {
  const { data } = await fetchData();
  console.log(data);

  return (
    <div>
      <p>test page</p>
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData() {
  let sbParams: ISbStoriesParams = { version: "draft" };

  // return fetch(
  //   "https://api.storyblok.com/v2/cdn/stories/home?version=draft&token=iGO5ZPCwhaW9VNPrzCTE6Qtt&cv=1691512853"
  // )
  //   .then((res) => {
  //     console.log(res.json());
  //     return res.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //     return data;
  //   });

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/test`, sbParams);
}
