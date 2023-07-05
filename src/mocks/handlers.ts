import { rest } from "msw";
import trips from "./trips.json";

export const handlers = [
  rest.get("/api/trips", (_req, res, ctx) => {
    const params = new URLSearchParams(window.location.search);
    const delay = params.get("delay");

    return res(ctx.delay(delay ? 2000 : 0), ctx.status(200), ctx.json(trips));
  }),
];
