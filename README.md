![Vercel Deploy](https://therealsujitk-vercel-badge.vercel.app/?app=toggle-view-list)

Demo [https://toggle-view-list.vercel.app/?view-mode=cards](https://toggle-view-list.vercel.app/?view-mode=cards)

---

This repo is a proof of concept, with the only aim of grasp the concepts with RSC, SSR and SSG features. Also learning some of TailwindCSS


The app is a simple list of items, with a toggle to change the view mode between cards and list, the data is fetched from https://trefle.io/api/v1/plants.

---

## How to run the app

Get a token from https://trefle.io/ and create a .env.local file with the following content:

```
# This is the token from https://trefle.io/
TREFLE_TOKEN=

# This is the number of pages to fetch from the API, don't use number bigger than 40, it could be rejected by the API
TREFLE_PAGES=5
```

Then run the following commands:

```
nvm use
npm install
npm run dev
```

### To test the SSR build the project and run the following command:

```
npm run build
npm run start
```

The app will be available at http://localhost:3000 and notice that the app will be fetching data from the API, and images from several sites so you need to be connected to internet.

>This app is really fast and it will still work disconnected from the internet due to SSG 🚀
