import { prop, Typegoose } from 'typegoose';

export class UserModel extends Typegoose {
  @prop({ required: true, unique: true, index: true })
  email: string;
  @prop({ required: true })
  password: string;
  @prop()
  firstname: string;
  @prop()
  lastname: string;
  @prop()
  get name() {
    return this.firstname + ' ' + this.lastname;
  }
}
