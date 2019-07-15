import { Typegoose } from 'typegoose';
import { UserModel } from './user.model';
export declare class Post extends Typegoose {
    title: string;
    description: string;
    created: Date;
    updated: Date;
    author: UserModel;
    votes: number;
}
