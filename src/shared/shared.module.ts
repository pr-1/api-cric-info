import { forwardRef, Global, Module } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { JwtStrategy } from '../auth/jwt.strategy';
import { UsersModule } from '../modules/users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
  imports: [forwardRef(() => UsersModule),
    JwtModule.register({
      secret: 'my secretdsgd',
      signOptions: { expiresIn: '60s' },
    }),
  ],
})
export class SharedModule {
}
