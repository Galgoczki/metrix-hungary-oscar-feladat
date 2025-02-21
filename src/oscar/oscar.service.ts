import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Oscar } from 'src/schemas/oscar.schema';
import { CreateOscarDto } from './dto/create-oscar.dto';
import { UpdateOscarDto } from './dto/update-oscar.dto';
import { Model } from 'mongoose';

@Injectable()
export class OscarService {
  constructor(@InjectModel(Oscar.name) private oscarModel: Model<Oscar>) {}

  create(createOscarDto: CreateOscarDto) {
    const newOscar = new this.oscarModel(createOscarDto);

    return newOscar.save();
  }

  findAll() {
    return this.oscarModel.find();
  }

  findOne(id: string) {
    return this.oscarModel.findById(id);
  }

  update(id: string, updateOscarDto: UpdateOscarDto) {
    return this.oscarModel.findByIdAndUpdate(id, updateOscarDto, { new: true });
  }

  remove(id: string) {
    return this.oscarModel.findByIdAndDelete(id);
  }
}
