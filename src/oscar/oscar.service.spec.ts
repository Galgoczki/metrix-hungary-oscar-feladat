import { Test, TestingModule } from '@nestjs/testing';
import { OscarService } from './oscar.service';

describe('OscarService', () => {
  let service: OscarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OscarService],
    }).compile();

    service = module.get<OscarService>(OscarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
