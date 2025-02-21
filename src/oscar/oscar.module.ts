import { Module } from '@nestjs/common';
import { OscarService } from './oscar.service';
import { OscarController } from './oscar.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OscarSchema } from 'src/schemas/oscar.schema';
import { LogModule } from 'src/log/log.module';

@Module({
  imports: [
    LogModule,
    MongooseModule.forFeature([{ name: 'Oscar', schema: OscarSchema }]),
  ],
  controllers: [OscarController],
  providers: [OscarService],
})
export class OscarModule {}
