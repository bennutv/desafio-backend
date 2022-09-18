interface INewsDTO {
  _id?: number;
  publisher_name: string;
  title: string;
  subtitle: string;
  image_url: string;
  date: Date;
  publisher_media: string;
  news_category_id: number;
  publisher_media_2: string;
}

export { INewsDTO };
