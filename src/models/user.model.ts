import { prop, Typegoose } from 'typegoose';
import { Post } from './post.model';

export class UserModel extends Typegoose {
  @prop({ required: true, unique: true, index: true })
  email: string;
  @prop({ required: true })
  password: string;
  @prop()
  name: string;
  @prop()
  age: number;
  @prop()
  gender: Gender;
  @prop()
  created: Date;
  @prop()
  token?: string;
  @prop()
  posts?: Post[];
  @prop()
  bookmarks?: Post[];
}

export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
  TRANGENDER = 'Transgender',
}
