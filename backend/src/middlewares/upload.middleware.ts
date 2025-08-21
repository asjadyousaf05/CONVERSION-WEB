import { Request, Response, NextFunction } from 'express';
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });

export const uploadMiddleware = (req: Request, res: Response, next: NextFunction) => {
    upload.any()(req, res, (err: any) => {
        if (err) {
            return res.status(400).json({ error: 'File upload failed.' });
        }
        next();
    });
};