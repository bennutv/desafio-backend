import jsonwebtoken from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { authConfig } from '../config/auth';


export const jwtAuth = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'No token provided' });
    }
    const parts = authHeader.split(' ');

    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).json({ message: 'Token malformatted' });
    }
    
    jsonwebtoken.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Token invalid' });
        return next();
    }
    );
} 
