import { Request, Response, NextFunction } from "express";

import env from "../../../config/env";
import { TokenUtils } from "../../utils/token";

const isPublicRoute = ({ method, path }: Request) => {
  const publicRoutes: { [key: string]: string[] } = {
    GET: [],
    PATCH: [],
    PUT: [],
    POST: ["/accounts", "/accounts/auth", "/accounts/token/refresh"],
    DELETE: [],
  };

  return publicRoutes[method]?.some((route) => path === route);
};

const secretAuthToken = env.token.jwtSecretAuth;

class Authorization {
  static async checkAuth(req: Request, res: Response, next: NextFunction) {
    if (isPublicRoute(req)) return next();

    const { authorization } = req.headers;
    if (!authorization) return res.status(401).end();

    const [auth, token] = authorization.split(" ");
    if (!token || auth !== "Bearer") return res.status(401).end();

    try {
      const id = TokenUtils.getIdFromJWT(token, secretAuthToken);
      req.headers.userId = id;
      return next();
    } catch {
      return res.status(401).end();
    }
  }
}

export { Authorization };
