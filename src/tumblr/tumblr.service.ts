import { Injectable } from '@nestjs/common';
import { CreateTumblrDto } from './dto/create-tumblr.dto';
import { UpdateTumblrDto } from './dto/update-tumblr.dto';

@Injectable()
export class TumblrService {
  create(createTumblrDto: CreateTumblrDto) {
    return 'This action adds a new tumblr';
  }

  findAll() {
    return `This action returns all tumblr`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tumblr`;
  }

  update(id: number, updateTumblrDto: UpdateTumblrDto) {
    return `This action updates a #${id} tumblr`;
  }

  remove(id: number) {
    return `This action removes a #${id} tumblr`;
  }
}
