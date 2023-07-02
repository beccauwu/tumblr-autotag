import { Test, TestingModule } from '@nestjs/testing';
import { TumblrController } from './tumblr.controller';
import { TumblrService } from './tumblr.service';

describe('TumblrController', () => {
  let controller: TumblrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TumblrController],
      providers: [TumblrService],
    }).compile();

    controller = module.get<TumblrController>(TumblrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
