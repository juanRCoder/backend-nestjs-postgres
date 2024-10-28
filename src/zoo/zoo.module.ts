import { Module } from '@nestjs/common';
import { ZooService } from './zoo.service';
import { ZooController } from './zoo.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ZooController],
  providers: [ZooService, PrismaService],
})
export class ZooModule {}
