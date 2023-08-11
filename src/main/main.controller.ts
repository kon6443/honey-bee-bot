import { Get, Req, Controller } from '@nestjs/common';

import { MainService } from './main.service';

@Controller('main')
export class MainController { 

    constructor(
        private readonly mainService: MainService,
    ) {}

    @Get()
    handleGetMain() {
        return {message: 'Hello world!'};
    }

}
