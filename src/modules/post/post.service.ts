import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Types } from 'mongoose';
import { ModelType } from 'typegoose';
import { Post } from 'src/models/post.model';
import { Observable, from, ObservableInput } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private readonly postModel: ModelType<Post>) {}

  create(createPostDto: Post): Observable<Post> {
    const createdPost = new this.postModel(createPostDto);
    return from(createdPost.save() as ObservableInput<Post>);
  }

  findAll(): Observable<Post[] | null> {
    return from(this.postModel.find().exec());
  }

  // updatePost(id: string) {
  //   return this.postModel()
  // }
  updatePost(id: string, item: Partial<Post>): Observable<Post> {
    return from(this.postModel
      .findByIdAndUpdate(this.toObjectId(id), item, { new: true })
      .exec());
  }

  deletePost(id: string): Observable<{success: boolean}> {
    return from(this.postModel.deleteOne({_id: id})).pipe(map((res) => {
      return {
        success: !!res.n,
      };
    }));
  }

  private toObjectId(id: string): Types.ObjectId {
    return Types.ObjectId(id);
  }
}
