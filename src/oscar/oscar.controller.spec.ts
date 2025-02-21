import { Test, TestingModule } from '@nestjs/testing';
import { OscarController } from './oscar.controller';
import { OscarService } from './oscar.service';

describe('OscarController', () => {
  let controller: OscarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OscarController],
      providers: [OscarService],
    }).compile();

    controller = module.get<OscarController>(OscarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
