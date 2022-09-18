import { Schema } from "mongoose";

import { connectionGeneral } from "../../../shared/infra/DB";
import { INewsDTO } from "./dto/INewsDTO";

const NewsSchema: Schema = new Schema({
  _id: { type: Number, require: true },
  publisher_name: { type: String, require: true },
  title: { type: String, require: true },
  subtitle: { type: String, require: true },
  image_url: { type: String, require: true },
  date: { type: Date, require: true },
  publisher_media: { type: String, require: true },
  news_category_id: { type: Number, require: true },
  publisher_media_2: { type: String, require: true },
});

const NewsModel = connectionGeneral.model<INewsDTO & Document>(
  "News",
  NewsSchema
);

export { NewsModel };
