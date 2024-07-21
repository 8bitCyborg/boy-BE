import { Test, TestingModule } from '@nestjs/testing';
import { ScribblesService } from './scribbles.service';

describe('ScribblesService', () => {
  let service: ScribblesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScribblesService],
    }).compile();

    service = module.get<ScribblesService>(ScribblesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
