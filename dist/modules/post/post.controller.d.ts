import { PostsService } from './post.service';
import { Post as BlogPost } from 'src/models/post.model';
import { Observable } from 'rxjs';
import { Request } from 'express';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    getPosts(): Observable<BlogPost[] | null>;
    create(post: BlogPost): Observable<BlogPost>;
    updatePost(id: string, request: Request): Observable<BlogPost>;
    deletePost(id: string): Observable<{
        success: boolean;
    }>;
}
