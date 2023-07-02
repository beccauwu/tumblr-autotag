import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TumblrService } from './tumblr.service';
import { CreateTumblrDto } from './dto/create-tumblr.dto';
import { UpdateTumblrDto } from './dto/update-tumblr.dto';

@Controller('tumblr')
export class TumblrController {
  constructor(private readonly tumblrService: TumblrService) {}

  @Post()
  create(@Body() createTumblrDto: CreateTumblrDto) {
    return this.tumblrService.create(createTumblrDto);
  }

  @Get()
  findAll() {
    return this.tumblrService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tumblrService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTumblrDto: UpdateTumblrDto) {
    return this.tumblrService.update(+id, updateTumblrDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tumblrService.remove(+id);
  }
}
