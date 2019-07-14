import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserModel } from '../../models/user.model';
import { SharedModule } from '../../shared/shared.module';

@Module({
  imports: [
    TypegooseModule.forFeature([UserModel]),
    forwardRef(() => SharedModule),
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
