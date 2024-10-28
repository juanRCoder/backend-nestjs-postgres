import { Module } from '@nestjs/common';
import { ZooModule } from './zoo/zoo.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ZooModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
