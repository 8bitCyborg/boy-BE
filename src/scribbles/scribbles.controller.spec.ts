import { Test, TestingModule } from '@nestjs/testing';
import { ScribblesController } from './scribbles.controller';

describe('ScribblesController', () => {
  let controller: ScribblesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScribblesController],
    }).compile();

    controller = module.get<ScribblesController>(ScribblesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
