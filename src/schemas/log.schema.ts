import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type LogDocument = mongoose.HydratedDocument<Log>;

export enum ActionEnum {
  create = 'create',
  get = 'getOne',
  getAll = 'getAll',
  delete = 'delete',
  update = 'update',
}

@Schema()
export class Log {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Oscar' })
  oscarID: mongoose.Schema.Types.ObjectId | null;

  @Prop()
  time: string;

  @Prop()
  ipAddress: string;

  @Prop()
  action: ActionEnum;
}

export const LogSchema = SchemaFactory.createForClass(Log);
