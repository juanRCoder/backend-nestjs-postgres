import { Module } from '@nestjs/common';
import { ZooModule } from './zoo/zoo.module';

@Module({
  imports: [ZooModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
