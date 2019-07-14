import { Controller, Get, Post, Body, Put, Delete, Logger, Param, Req } from '@nestjs/common';
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
