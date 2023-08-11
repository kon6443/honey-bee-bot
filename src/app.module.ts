import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MainModule } from './main/main.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [MainModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
