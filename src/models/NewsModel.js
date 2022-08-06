import mongoose from "mongoose"
const { Schema } = mongoose;

export const NewsSchema = new Schema({
  _id: false,
	id: {type: Number, required: true},
	publisher_name: {type: String, required: true},
	title: {type: String, required: true},
	subtitle: { type: String, required: true },
  image_url: {type: String, required: true},
  date: {type: Date, required: true},
  publisher_media: {type: String, required: true},
  news_category_id: { type: Number, required: true },
  publisher_media_2: {type: String, required: true},
});

const News = mongoose.model("news", NewsSchema);

export default News