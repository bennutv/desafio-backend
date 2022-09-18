import { sign, decode, verify } from "jsonwebtoken";

import env from "../../config/env";

class TokenUtils {
  static createJWT(
    subject: string,
    expiresIn: string,
    secret: string,
    payload?: unknown
  ): string {
    const token = sign({ payload }, secret, {
      subject,
      expiresIn,
    });

    return token;
  }

  static getIdFromJWT(token: string, secret: string): string {
    verify(token, secret);
    const decodedToken = decode(token);
    return decodedToken.sub;
  }
}

export { TokenUtils };
