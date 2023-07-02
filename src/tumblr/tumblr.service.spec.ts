import { Test, TestingModule } from '@nestjs/testing';
import { TumblrService } from './tumblr.service';

describe('TumblrService', () => {
  let service: TumblrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TumblrService],
    }).compile();

    service = module.get<TumblrService>(TumblrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
