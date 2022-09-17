import { sign, decode, verify } from "jsonwebtoken";

import env from "../../config/env";

class TokenUtils {
  static createJWT(subject: string): string {
    const token = sign({}, env.config.secret, {
      // eslint-disable-next-line no-underscore-dangle
      subject,
      expiresIn: "1d",
    });

    return token;
  }

  static getIdFromJWT(token: string): string {
    verify(token, env.config.secret);
    const decodedToken = decode(token);
    return decodedToken.sub;
  }
}

export { TokenUtils };
