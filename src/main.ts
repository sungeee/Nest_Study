import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";



//Nest 실행함수 
const bootstrap =async () => {
    const app = await NestFactory.create(AppModule);

    app.listen(3000);
}

bootstrap();