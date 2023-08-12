import { Get, Post, Req, Controller } from '@nestjs/common';

import { MainService } from './main.service';

@Controller('main')
export class MainController { 

    constructor(
        private readonly mainService: MainService,
    ) {}

    @Get()
    async handleGetMain() {
        const res = await this.mainService.getAll();
        console.log('res:', res);
        return {message: res};
    }

    @Post()
    async handleGetMain() {
        const res = await this.mainService.getAll();
        console.log('Post:', res);
        return {message: res};
    }


}
