import { trendData } from "data/trendData";
import { rest } from "msw";

const todos = ["먹기", "자기", "놀기"];

export const handlers = [
  // trendData불러오기
  rest.get("/trendData", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(trendData));
  }),

  // 할일 추가
  rest.post("/todos", (req, res, ctx) => {
    todos.push(req.body);
    return res(ctx.status(201));
  }),
];
