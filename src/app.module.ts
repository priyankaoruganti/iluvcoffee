import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
import { CoffeesService } from './coffees/coffees.service';
import { CoffeesModuleModule } from './coffees-module/coffees-module.module';

@Module({
  imports: [CoffeesModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
