import {  Entity, Column, PrimaryColumn  } from 'typeorm';

@Entity("News")
export class News {

    @PrimaryColumn()
    id: string;

    @Column()
    publisher_name: string;

    @Column()
    title: string;

    @Column()
    subtitle: string;

    @Column()
    image_url: string;

    @Column()
    date:string;

    @Column()
    publisher_media:string;

    @Column()
    news_category_id:string;

    @Column()
    publisher_media_2:string;

}