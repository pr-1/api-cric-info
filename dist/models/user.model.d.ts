import { Typegoose } from 'typegoose';
export declare class UserModel extends Typegoose {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    readonly name: string;
}
