import { PartialType } from '@nestjs/mapped-types';
import { CreateLogDto } from 'src/log/dto/create-log.dto';

export class UpdateLogDto extends PartialType(CreateLogDto) {}
