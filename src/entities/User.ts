import {  Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn  } from 'typeorm';

@Entity("user")
export class User {

    @PrimaryColumn()
    id: string;

    @Column()
    email:string;

    @Column()
    senha: string;

}