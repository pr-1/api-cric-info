import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { sign, SignOptions } from 'jsonwebtoken';
import { UsersService } from '../modules/users/users.service';
import { UserModel } from '../models/user.model';

@Injectable()
export class AuthService {
  private readonly jwtOptions: SignOptions;
  private readonly jwtKey: string;

  constructor(
    @Inject(forwardRef(() => UsersService))
    readonly userService: UsersService,
  ) {
    this.jwtOptions = { expiresIn: '12h' };
    this.jwtKey = 'JWT_KEY';
  }

  async signPayload(payload: any): Promise<string> {
    return sign(payload, this.jwtKey, this.jwtOptions);
  }

  async validateUser(validatePayload: any): Promise<UserModel> {
    return this.userService.findOne({ email: validatePayload.email.toLowerCase() });
  }
}
