import { Controller, Get, Module } from "@nestjs/common";

// AppController 클래스의 역할을 Controller
@Controller("/app") //app 을 공통으로 경로를 탄다
export class AppController {
    @Get("/hello")
    getHelloNest(){
        return "Hello Nest";
    }

    @Get("/bye")
    getByeNest(){
        return "Bye Nest";
    }
}