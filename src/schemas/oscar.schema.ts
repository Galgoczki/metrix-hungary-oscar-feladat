import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OscarDocument = HydratedDocument<Oscar>;

@Schema()
export class Oscar {
  @Prop()
  year: number;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  director: string;

  @Prop()
  isWon: boolean;
}

export const OscarSchema = SchemaFactory.createForClass(Oscar);
