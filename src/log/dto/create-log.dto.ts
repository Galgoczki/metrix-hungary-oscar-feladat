import mongoose from 'mongoose';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ActionEnum } from 'src/schemas/log.schema';

export class CreateLogDto {
  @IsNotEmpty()
  @IsString()
  oscarId: mongoose.Schema.Types.ObjectId;

  @IsNotEmpty()
  @IsString()
  date: Date;

  @IsNotEmpty()
  @IsString()
  ipAddress: string;

  @IsNotEmpty()
  @IsEnum(ActionEnum)
  action: ActionEnum;
}
