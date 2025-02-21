import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OscarModule } from './oscar/oscar.module';
import { LogModule } from './log/log.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      //atlas felhő adatabtázis
      /*
      `mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@cluster0.jslro.mongodb.net/Oscar?retryWrites=true&w=majority&appName=Cluster0`,
      */
      // /*
      //docker locális adatbázis
      `mongodb://${process.env.DOCKET_USERNAME}:${process.env.DOCKET_PASSWORD}@mongo/Oscar?authSource=admin`,
      {
        dbName: 'Oscar',
      },
      // */
    ),
    OscarModule,
    LogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
