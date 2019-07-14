import { forwardRef, Global, Module } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { JwtStrategy } from '../auth/jwt.strategy';
import { UsersModule } from '../modules/users/users.module';

@Global()
@Module({
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
  imports: [forwardRef(() => UsersModule)],
})
export class SharedModule {
}
