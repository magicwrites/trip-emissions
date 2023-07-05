import { rest } from "msw";

const trips = [
  {
    name: "European quest",
    image: "https://images.unsplash.com/photo-1511192806308-9b77cd6f754c",
    countries: 8,
    days: 21,
    emissions: 810,
    rating: 4.7,
  },
  {
    name: "European quest",
    image: "https://images.unsplash.com/photo-1511192806308-9b77cd6f754c",
    countries: 8,
    days: 21,
    emissions: 3.56,
    rating: 4.7,
  },
  {
    name: "European quest",
    image: "https://images.unsplash.com/photo-1511192806308-9b77cd6f754c",
    countries: 8,
    days: 21,
    emissions: 6.92,
    rating: 4.7,
  },
];

export const handlers = [
  rest.get("/api/trips", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(trips));
  }),
];