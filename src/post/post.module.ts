import { Module } from "@nestjs/common";
import { PostService } from "./post.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Posts } from './post.entity';
import { PostController } from "./post.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Posts])],
    controllers: [PostController],
    providers: [PostService]
})
export class PostModule{}