import { Request, Response } from 'express'
import path from 'path';
import fs from 'fs';


type News = {
    id: number;
    publisher_name: string;
    title: string;
    subtitle: string;
    image_url: string;
    date: string;
    publisher_media: string;
    news_category_id: number;
    publisher_media_2: string;
}

export class NewsController {
    async news(req: Request, res: Response) {
        const file = path.join(__dirname, "../database/news.json");
        try {
            fs.readFile(file, (err, data) => {
                if (err) return res.status(500).json({ message: "Database error" });
                const news: News[] = JSON.parse(data.toString());
                res.status(200).json(news);
            }
            )
        }
        catch (err) {
            res.status(500).json({ message: "Something went wrong" });
        }

    }

    async newsItem(req: Request, res: Response) {
        const file = path.join(__dirname, "../database/news.json");
        const { id } = req.params;

        try {
            fs.readFile(file, (err, data) => {
                if (err) return res.status(500).json({ message: "Database error" });
                const news: News[] = JSON.parse(data.toString());
                const newsItem = news.find(n => n.id === Number(id));
                if (newsItem) {
                    res.status(200).json(newsItem);
                } else {
                    res.status(404).json({
                        message: "News not found"
                    });
                }
            }
            );
        } catch (err) {
            res.status(500).json({
                message: "Something went wrong"
            });
        }

    }


}


