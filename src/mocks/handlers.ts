import { rest } from "msw";
import trips from "./trips.json";

export const handlers = [
  rest.get("/api/trips", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(trips));
  }),
];
