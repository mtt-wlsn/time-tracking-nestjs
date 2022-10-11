import { PrismaService } from './../../shared/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsResolver } from './tags.resolver';

@Module({
  providers: [TagsResolver, TagsService, PrismaService],
})
export class TagsModule {}
