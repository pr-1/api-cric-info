import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { PostModule } from './modules/post/post.module';
import 'dotenv/config';
import { SharedModule } from './shared/shared.module';
const dbUrl = 'mongodb+srv://blog-app-admin:qwerty1234@cluster0-cb4pe.mongodb.net/test?retryWrites=true&w=majority';

@Module({
  imports: [
    TypegooseModule.forRoot(dbUrl, {useNewUrlParser: true, useCreateIndex: true}),
    PostModule,
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
