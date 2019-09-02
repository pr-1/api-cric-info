import { prop, Typegoose, Ref } from 'typegoose';
import { IsString } from 'class-validator';
import { UserModel } from './user.model';

enum PostTypeEnum {
  TIPS = 'tips',
  CURRENT = 'current',
  NEWS = 'news',
}
export class Post extends Typegoose {
  @IsString()
  @prop({ required: true })
  title: string;
  @prop({ required: true })
  description: string;
  @prop({ default: '' })
  hindi: string;
  @prop({default: Date.now()})
  created: Date;
  @prop({default: Date.now()})
  updated: Date;
  @prop()
  postType: PostTypeEnum;
}
