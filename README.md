## Some assumptions

- PDF is a poor source to extract pixel perfect designs, so I have approximated a lot of colours, margins and shadow sizes
- background images _seem_ like purposefuly darkened to enable easier reading, so I assumed filter here
- I have adjusted rating to showcase how stars component can accomodate to various scenarios
- I cannot identify the lovely font used in the task, so I have relied on nunito for the exercise
- _"Changing the number of elements in the json file should change the number of elements on the page"_ could be either websocket event handling or just hot reload for development, I went with the latter

## Room for improvement

- a lot of theme values like spacing (margins, paddings, gaps) are hardcoded and could be moved to constants or better yet: engrained in the chakra UI theme system if possible
- very early [in the docs](https://chakra-ui.com/getting-started#chakrabaseprovider) chakra reveals minimalistic approach that can be leverage through `<ChakraBaseProvider />` - something to consider if we want to get this codebase as lean as possible

## Time spent

### Setup

- 15m on reading and understanding the task
- 15m on build setup: opted to learn raw vite setup rather than already known create-react-app
- 15m to consider inclusion of server side rendering for the project, decided to not overkill it
- 30m to [experiment](https://github.com/magicwrites/trip-emissions/tree/api-mock) and eventually rely on [mock service worker](https://mswjs.io) instead of [vercel functions](https://vercel.com/docs/concepts/functions/serverless-functions)

### Features

- 30m to draft functionality in react
- 2h of work on learning and applying chakra UI elements 🤯 time for a coffee break..
- 1h of work to ditch inline SVG as a solution for stars and rely on chakra icon set instead - then to implement it

### Refactor & refinement

- 15m to split Trip component into smaller parts
- 30m to build delay feature, extract Skeletons from App.tsx and refine them a bit
- 15m for more extractions from App.tsx such as api or theme, also lovely favicon
- 15m for a final round of reflection, extracting Grid out of "List" components
