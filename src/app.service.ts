import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return require('./views/add-post.html');
  }
}
