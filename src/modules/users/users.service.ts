import { forwardRef, HttpException, HttpStatus, Inject, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from 'typegoose';
import { compare, genSalt, hash } from 'bcryptjs';
import { UserModel } from '../../models/user.model';
import { AuthService } from '../../auth/auth.service';
import { BaseService } from '../../services/base.service';

@Injectable()
export class UsersService extends BaseService<UserModel> {
  constructor(@InjectModel(UserModel)
              private readonly userModel: ModelType<UserModel>,
              @Inject(forwardRef(() => AuthService))
              readonly authService: AuthService) {
    super();
    this.model = userModel;
  }

  async register(vm) {
    const { email, password, firstName, lastName } = vm;
    Logger.log('Register req is ' + vm.toString() , 'USER SERVICE');

    const newUser = new this.userModel();
    newUser.email = email.trim().toLowerCase();
    newUser.password = password;
    // newUser.name = lastName;

    const salt = await genSalt(10);
    newUser.password = await hash(password, salt);

    try {
      const result = await this.userModel.create(newUser);
      return result.toJSON() as UserModel;
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async login(vm): Promise<any> {
    const { email, password } = vm;

    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }

    const isMatch = await compare(password, user.password);

    if (!isMatch) {
      throw new HttpException('Invalid credentials', HttpStatus.BAD_REQUEST);
    }

    const payload = {
      email: user.email,
      password: user.password,
    };

    const token = await this.authService.signPayload(payload);

    return {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };
  }

}
