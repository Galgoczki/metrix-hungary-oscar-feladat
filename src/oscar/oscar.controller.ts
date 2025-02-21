import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  UsePipes,
  ValidationPipe,
  Ip,
} from '@nestjs/common';
import { OscarService } from './oscar.service';
import { CreateOscarDto } from 'src/oscar/dto/create-oscar.dto';
import { UpdateOscarDto } from 'src/oscar/dto/update-oscar.dto';
import mongoose from 'mongoose';
import { ActionEnum } from 'src/schemas/log.schema';
import { LogService } from 'src/log/log.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller('oscar')
export class OscarController {
  constructor(
    private readonly oscarService: OscarService,
    private readonly logServuce: LogService,
  ) {}

  logHelper(
    ipAddress: string,
    action: ActionEnum,
    userId: mongoose.Types.ObjectId | null,
  ): void {
    this.logServuce.create(ipAddress, action, userId).catch(() => {
      throw new Error("couldn't log");
    });
  }
  @Post()
  @ApiResponse({
    status: 201,
    description: 'Oscar sikeresen létrehozva.',
  })
  @UsePipes(new ValidationPipe())
  async create(@Ip() ip: string, @Body() createOscarDto: CreateOscarDto) {
    console.log(`Request from IP: ${ip}`);
    const result = await this.oscarService.create(createOscarDto);
    this.logHelper(ip, ActionEnum.create, result._id);
    return result;
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Minden Oscar lekérése',
  })
  async findAll(@Ip() ip: string) {
    console.log(`Request from IP: ${ip}`);
    const result = await this.oscarService.findAll();
    this.logHelper(ip, ActionEnum.getAll, null);
    return result;
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Oscar sikeresen lekérdezve.',
  })
  @ApiResponse({
    status: 403,
    description: 'Invalid id.',
  })
  @ApiResponse({
    status: 404,
    description: 'Nincs ilyen Oscar',
  })
  async findOne(@Ip() ip: string, @Param('id') id: string) {
    console.log(`Request from IP: ${ip}`);
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new HttpException('Invalid id', 403);

    const result = await this.oscarService.findOne(id);

    if (!result) throw new HttpException('oscar not found', 404);
    this.logHelper(ip, ActionEnum.get, result._id);

    return result;
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'Oscar sikeresen frissitve.',
  })
  @ApiResponse({
    status: 403,
    description: 'Invalid id.',
  })
  @ApiResponse({
    status: 404,
    description: 'Nincs ilyen Oscar',
  })
  @UsePipes(new ValidationPipe())
  async update(
    @Ip() ip: string,
    @Param('id') id: string,
    @Body() updateOscarDto: UpdateOscarDto,
  ) {
    console.log(`Request from IP: ${ip}`);
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new HttpException('Invalid id', 403);

    const result = await this.oscarService.update(id, updateOscarDto);

    if (result === null || result === undefined)
      throw new HttpException('oscar not found', 404);
    this.logHelper(ip, ActionEnum.update, result._id);

    return result;
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Oscar sikeresen törölve.',
  })
  @ApiResponse({
    status: 403,
    description: 'Invalid id.',
  })
  @ApiResponse({
    status: 404,
    description: 'Nincs ilyen Oscar',
  })
  async remove(@Ip() ip: string, @Param('id') id: string) {
    console.log(`Request from IP: ${ip}`);
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new HttpException('Invalid id', 403);

    const result = await this.oscarService.remove(id);

    if (result === null || result === undefined)
      throw new HttpException('oscar not found', 404);

    this.logHelper(ip, ActionEnum.delete, result._id);

    return result;
  }
}
