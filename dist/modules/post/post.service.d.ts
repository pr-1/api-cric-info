import { ModelType } from 'typegoose';
import { Post } from 'src/models/post.model';
import { Observable } from 'rxjs';
export declare class PostsService {
    private readonly postModel;
    constructor(postModel: ModelType<Post>);
    create(createPostDto: Post): Observable<Post>;
    findAll(): Observable<Post[] | null>;
    updatePost(id: string, item: Partial<Post>): Observable<Post>;
    deletePost(id: string): Observable<{
        success: boolean;
    }>;
    private toObjectId;
}
