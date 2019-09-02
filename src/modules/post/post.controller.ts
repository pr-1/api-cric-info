import { Controller, Get, Post, Body, Put, Delete, Logger, Param, Req, HttpException, HttpStatus } from '@nestjs/common';
import { PostsService } from './post.service';
import { Post as BlogPost } from 'src/models/post.model';
import { Observable } from 'rxjs';
import { Request } from 'express';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPosts(): Observable<BlogPost[] | null> {
    Logger.log(`Get posts Api called`, 'Post Controller');
    return this.postsService.findAll();
  }

  @Post()
  create(@Body() post: BlogPost): Observable<BlogPost> {
    if (!post.title) {
      throw new HttpException('Post Title is required', HttpStatus.BAD_REQUEST);
    }
    if (!post.english) {
      throw new HttpException('Post Description is required', HttpStatus.BAD_REQUEST);
    }
    if (!post.postType) {
      throw new HttpException('Post Type is required', HttpStatus.BAD_REQUEST);
    }
    const create$ = this.postsService.create(post);
    create$.subscribe((res) => {
      Logger.log('created doc' + res, 'PostController');
    });
    return create$;
  }

  @Put(':id')
  updatePost(@Param('id') id: string, @Req() request: Request): Observable<BlogPost> {
    return this.postsService.updatePost(id, request.body);
  }

  @Delete(':id')
  deletePost(@Param('id') id: string): Observable<{success: boolean}> {
    return this.postsService.deletePost(id);
  }
}
