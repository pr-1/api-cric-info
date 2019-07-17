import { Body, Controller, HttpException, HttpStatus, Logger, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserModel } from '../../models/user.model';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('register')
  async register(@Body() vm: UserModel): Promise<any> {
    const { email, password, firstname, lastname } = vm;

    if (!email) {
      throw new HttpException('Username is required', HttpStatus.BAD_REQUEST);
    }

    if (!password) {
      throw new HttpException('Password is required', HttpStatus.BAD_REQUEST);
    }

    let exist;
    try {
      exist = await this.userService.findOne({ email });
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    if (exist) {
      throw new HttpException(`${email} exists`, HttpStatus.BAD_REQUEST);
    }

    const newUser = await this.userService.register(vm);
    return newUser;
  }

  @Post('login')
  login(@Body() vm: any) {
    const fields = Object.keys(vm);
    fields.forEach(field => {
      if (!vm[field]) {
        throw new HttpException(`${field} is required`, HttpStatus.BAD_REQUEST);
      }
    });

    return this.userService.login(vm);
  }
}
