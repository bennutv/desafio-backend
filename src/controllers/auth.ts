import { Request, Response } from 'express'
import path from 'path';
import fs from 'fs';
import jsonwebtoken from 'jsonwebtoken';
import { authConfig } from '../config/auth';


export type User = {
  userid: number;
  username: string;
  password: string;
}

export class AuthController {
  async login(req: Request, res: Response) {
    let file = path.join(__dirname, "../database/user.json");
    const { username, password } = req.body;

    fs.readFile(file, (err, data) => {
      if (err) return res.status(500).json({ message: "Database error" });
      const users: User[] = JSON.parse(data.toString());
      const user = users.find(u => u.username === username && u.password === password);
      if (user) {
        const token = jsonwebtoken.sign({ userid: user.userid }, authConfig.secret, {
          expiresIn: 3600
        });
        res.status(200).json({
          "message": "Logged in",
          token: token
        });
      } else {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
    })
  }

  async logout(req: Request, res: Response) {

    res.status(200).json({
      message: "Logged out"
    });
  }

}