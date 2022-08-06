import { Router } from "express";
import { NewsRouter } from "./routers/NewsRouter.js";
import { UserRouter } from "./routers/UserRouter.js";
import { AuthRouter } from "./routers/AuthRouter.js";

const router = Router();

router.get("/", (request, response) => {
  return response.json({
    message: `Bennu Challenge`,
  });
});

router.use('/news', NewsRouter)
router.use('/user', UserRouter)
router.use('/auth', AuthRouter)

export { router };
