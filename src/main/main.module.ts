import { Module } from '@nestjs/common';
import { MainController } from './main.controller';
import { MainService } from './main.service';
import { SharedModule } from '../shared/shared.module';

@Module({
    imports: [ SharedModule ],
    controllers: [MainController],
    providers: [MainService], 
    exports: [MainService], 
})
export class MainModule {}
