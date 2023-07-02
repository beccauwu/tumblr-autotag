import { PartialType } from '@nestjs/mapped-types';
import { CreateTumblrDto } from './create-tumblr.dto';

export class UpdateTumblrDto extends PartialType(CreateTumblrDto) {}
