This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Adding Storyblok to Next 13
- Storyblok Docs [https://www.storyblok.com/tp/add-a-headless-cms-to-next-js-13-in-5-minutes]

Each component that can be edited via Storyblok interface needs to have a representation inside our Next.js App.
Therefore after having setup the storyblokProvider, which communicates with Storyblok. We need to create a component in our components folder for each 
component that is available in storyblok/Block Library. Important side note: never define them as React.FC, Storyblok cannot handle that.

### Communication between Storyblok and Nextjs App
- storyblok provider configures storyblokInit, it needs be passed an API token, which can be found in each storyblok space in settings/access token.
- due to security reasons you should store the access-token as an env-variable. Don't forget to configure nextjs in order to make it accessible to the app:
 ``` 
// next.config.js
env: {
    storyblokApiToken: process.env.STORYBLOK_API_TOKEN,
  },
``` 
- On a page level, we use the package `@storyblok/react`, which handles apiCalls to storyblok for us.
- return storyblokApi.get(`cdn/stories/test`, sbParams);` will fetch all components for page "test"
- every page needs to represented as a route in our app as well


## Run https server locally
To communicate with storyblok while develeoping, you need to setup a local https proxy.
A detailed documention can be found here [https://www.storyblok.com/faq/setup-dev-server-https-proxy]
after having installed mkcert, run
`mkcert localhost `
`local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem`

## Typescript support

Storyblok components can be typed and it is also possible to fetch the schema directly from storyblok. [https://www.storyblok.com/faq/how-can-i-utilize-typescript-in-my-storyblok-project]

1. Install the Storyblok CLI: npm i -g storyblok
2. Login using `storyblok login` in your terminal
3. In your project directory, save the schema of your Storyblok components in a .json file by running `storyblok pull-components --space SPACE_ID` 
4. Install storyblok-generate-ts: `npm i -D storyblok-generate-ts`
5. Add the following command to your package.json: `"generate-sb-types": "storyblok-generate-ts source=./components.[SPACE_ID].json target=./component-types-sb"`
6. Generate the types: `npm run generate-sb-types`
7. Import the type in each component, for example: import type { PageStoryblok } from '../component-types-sb'
8. Remember to rerun the pull-components and generate-sb-types scripts after you’ve made changes to your component schema in your Storyblok space