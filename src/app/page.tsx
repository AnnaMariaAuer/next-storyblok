import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

// export default async function Home() {
//   const { data } = await fetchData();
//   console.log(data);

//   return (
//     <div>
//       <p>homepage</p>
//       <StoryblokStory story={data.story} />
//     </div>
//   );
// }

// export async function fetchData() {
//   let sbParams: ISbStoriesParams = { version: "draft" };

//   const storyblokApi = getStoryblokApi();
//   return storyblokApi.get(`cdn/stories/home`, sbParams);
// }

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData() {
  const sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams);
}
