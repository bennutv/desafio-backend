import { Request, Response, NextFunction } from "express";

import { TokenUtils } from "../../utils/token";

const isPublicRoute = ({ method, path }: Request) => {
  const publicRoutes: { [key: string]: string[] } = {
    GET: [],
    PATCH: [],
    PUT: [],
    POST: ["/accounts", "/accounts/auth"],
    DELETE: [],
  };

  return publicRoutes[method]?.some((route) => path === route);
};

class Authorization {
  static checkAuth(request: Request, response: Response, next: NextFunction) {
    if (isPublicRoute(request)) return next();

    const { auth } = request.cookies;
    if (!auth) return response.status(401).end();
    try {
      const id = TokenUtils.getIdFromJWT(auth);
      request.headers.userId = id;
      next();
    } catch {
      return response.status(401).end();
    }
    return response.status(401).end();
  }
}

export { Authorization };
