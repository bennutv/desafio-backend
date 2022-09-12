import mongoose = require('mongoose');
import { NewsInterface } from '../interfaces';

const NewsSchema = new mongoose.Schema<NewsInterface>(
  {

    id: { type: Number, require: true, unique:true },
    publisher_name: { type: String, require: true },
    title: { type: String, unique: true, require: true, lowercase: true },
    subtitle: { type: String, require: true, select: false },
    image_url: { type: String, unique: true, require: true },
    publisher_media: { type: String, require:true},
    date: { type: Date },
    news_category_id: { type: Number, require: true  },
    publisher_media_2: { type: String, require: true  },
  },
  { collection: 'newsCollections' }
);
export const NewsModel = mongoose.model('NewsCollection', NewsSchema, 'NewsCollection');
