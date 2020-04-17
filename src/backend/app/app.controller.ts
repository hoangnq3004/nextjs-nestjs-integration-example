import {Body, Controller, Get, Post} from "@nestjs/common";
import {PostDto} from './post.dto'

@Controller("randomNumber")
export class AppController {

    @Post()
    randomNumber(@Body() postDTO: PostDto) {
        console.log(postDTO);
        return Math.random() * 100;
    }
}
