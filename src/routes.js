import { Router } from "express";

import { NewsRouter } from "./routers/NewsRouter.js";

const router = Router();

router.get("/", (request, response) => {
  return response.json({
    message: `Bennu Challenge`,
  });
});

router.use('/news', NewsRouter)

export { router };
