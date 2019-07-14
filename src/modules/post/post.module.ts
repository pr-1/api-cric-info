import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { PostsController } from './post.controller';
import { PostsService } from './post.service';
import { Post } from '../../models/post.model';

@Module({
  imports: [TypegooseModule.forFeature([Post])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostModule {}
