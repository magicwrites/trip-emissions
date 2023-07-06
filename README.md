## Quick start

You have a few options:

- you can go to [the online demo](https://trip-emissions.mazur.site/)
- you can go to [the online demo with a delayed parameter](https://trip-emissions.mazur.site/?delay=true) if you want to see the loading indicators
- or you can just clone this repo and run `npm install` and then `npm run dev` using node version `18.x`
- for development you can also review the components stories by running `npm run storybook` 

## Objective

Some approximations that I have done:

- image reference in PDF does not provide best of precisions, so I have approximated a lot of colours, margins and shadow sizes
- images on tile backgrounds _seem_ to be darkened (for better text readability?), so I have used a filter to reflect that
- I have introduced greater variety of rating data to showcase multiple star ratings
- I have not identified the font used in the task, so I have relied on nunito for the exercise
- I have not found space for meaningful unit tests in the task, but I have introduced storybook to enable individual components reviews
- _"Changing the number of elements in the json file should change the number of elements on the page"_ could be either a request for websocket (live updates) implementation or just hot reload setup for development, I went with the latter

Also some of my own acceptance criteria:

- I have tested the application on 360, 640, 768, 1024, 1280, 1333, 1444, 1777, 1920 screen widths
- I have tested a slow loading behaviour with a [`?delay=true`](https://trip-emissions.mazur.site/?delay=true) parameter

## Suggested next steps

Given next 8 hours, I would:

- consider better organisation of the hardcoded values for margins, paddings, gaps or colours (constants, chakra theme customisation?)
- consider reduction of the application size through the [`<ChakraBaseProvider />`](https://chakra-ui.com/getting-started#chakrabaseprovider)
- consider error handling for API unavailability, some pretty message would do
- consider better usage of higher resolutions, at the moment everything looks rather small, it could scale better
- consider making the rating component grid based, so that the stars remain in one place visually regardless of the fractions in the score

## Time spent (6h 45m)

### Setup (1h 15m)

- 15m on reading and understanding the task
- 15m on build setup: opted to learn raw vite setup rather than already known create-react-app
- 15m to consider inclusion of server side rendering for the project, decided to not overkill it
- 30m to [experiment](https://github.com/magicwrites/trip-emissions/tree/api-mock) and eventually rely on [mock service worker](https://mswjs.io) instead of [vercel functions](https://vercel.com/docs/concepts/functions/serverless-functions)

### Features (3h 30m)

- 30m to draft functionality in react
- 2h of work on learning and applying chakra UI elements 🤯 time for a coffee break..
- 1h of work to ditch inline SVG as a solution for stars and rely on chakra icon set instead - then to implement it

### Refactor & refinement (2h)

- 15m to split Trip component into smaller parts
- 30m to build delay feature, extract Skeletons from App.tsx and refine them a bit
- 15m for more extractions from App.tsx such as api or theme, also lovely favicon
- 15m for a final round of reflection, extracting Grid out of "List" components
- 30m to figure out whether storybook fits the project - seems alright although a lot of dependencies are introduced
- 15m in the morning of next day to review, accept and document the endeavour

## A note on chakra

I expect my usage of chakra is flawed as I have spent only an hour or two digesting the basic parts of tool's documentation. With my existing knowledge I could rely on tailwind to get better results faster, but I consciously decided that for this exercise it will be more beneficial to present what I could build given one workday with chakra.
