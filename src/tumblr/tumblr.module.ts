import { Module } from '@nestjs/common';
import { TumblrService } from './tumblr.service';
import { TumblrController } from './tumblr.controller';

@Module({
  controllers: [TumblrController],
  providers: [TumblrService]
})
export class TumblrModule {}
