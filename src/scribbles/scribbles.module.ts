import { Module } from '@nestjs/common';
import { ScribblesController } from './scribbles.controller';
import { ScribblesService } from './scribbles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scribble } from './entities/scribble.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature( [Scribble]),
  ],
  controllers: [ScribblesController],
  providers: [ScribblesService]
})
export class ScribblesModule {}
