import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { ActionEnum, Log } from 'src/schemas/log.schema';

@Injectable()
export class LogService {
  constructor(@InjectModel(Log.name) private logModel: Model<Log>) {}

  create(
    ipAddress: string,
    action: ActionEnum,
    userId?: mongoose.Types.ObjectId | null,
  ) {
    console.log('ip address: ' + ipAddress);
    const newLog = new this.logModel({
      oscarID: userId,
      time: new Date(),
      ipAddress: 'safety',
      action: action,
    });

    return newLog.save();
  }

  findAll() {
    return this.logModel.find();
  }

  findOne(id: string) {
    return this.logModel.findById(id);
  }
}
