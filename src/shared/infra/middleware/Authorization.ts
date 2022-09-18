import { Request, Response, NextFunction } from "express";

import env from "../../../config/env";
import { AccountsRepository } from "../../../modules/accounts/repositories/AccountsRepository";
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

const expireAuthToken = env.token.jwtTimeToExpireAuth;
const expireRefreshToken = env.token.jwtTimeToExpireRefresh;
const secretAuthToken = env.token.jwtSecretAuth;
const secretRefreshToken = env.token.jwtSecretRefresh;

class Authorization {
  static async checkAuth(req: Request, res: Response, next: NextFunction) {
    if (isPublicRoute(req)) return next();

    const { authorization } = req.headers;
    if (!authorization) return res.status(401).end();

    const [auth, token] = authorization.split(" ");
    if (!token || auth !== "Bearer") return res.status(401).end();

    try {
      const id = TokenUtils.getIdFromJWT(token, secretAuthToken);
      const user = await AccountsRepository.getInstance().findById(id);
      if (!user.loggedIn) return res.status(401).end();
      req.headers.userId = id;
      return next();
    } catch {
      return res.status(401).end();
    }
  }
}

export { Authorization };
