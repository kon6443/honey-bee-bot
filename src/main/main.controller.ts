import { Get, Post, Req, Controller } from '@nestjs/common';

import { MainService } from './main.service';
import { PartyDto } from './dto/party-dto';

@Controller('main')
export class MainController { 

    constructor(
        private readonly mainService: MainService,
    ) {}

    @Get()
    async handleGetMain() {
        const PartyDto: PartyDto[] = await this.mainService.getAll();
        console.log('PartyDto:', PartyDto);
        const list = this.mainService.organizePartyDto(PartyDto);

        return {
            "version": "2.0",
            "template": {
            "outputs": [{
                    "simpleText": {
                        "text": list
                    }
                }]
            }
        }

    }

    @Post()
    async handlePostMain() {
        const PartyDto: PartyDto[] = await this.mainService.getAll();
        console.log('PartyDto:', PartyDto);
        const list = this.mainService.organizePartyDto(PartyDto);

        return {
            "version": "2.0",
            "template": {
            "outputs": [{
                    "simpleText": {
                        "text": list
                    }
                }]
            }
        }

    }

}
