import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { sign, SignOptions, verify } from 'jsonwebtoken';
import { UsersService } from '../modules/users/users.service';
import { UserModel } from '../models/user.model';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly jwtOptions: SignOptions;
  private readonly jwtKey: string;

  constructor(
    @Inject(forwardRef(() => UsersService))
    readonly userService: UsersService,
    readonly jwtService: JwtService,
  ) {
    this.jwtOptions = { expiresIn: '12h' };
    this.jwtKey = 'JWT_KEY';
  }

  async signPayload(payload: any): Promise<string> {
    return this.jwtService.sign(payload);
  }
}
