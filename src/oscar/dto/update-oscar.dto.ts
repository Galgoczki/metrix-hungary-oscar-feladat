import { PartialType } from '@nestjs/mapped-types';
import { CreateOscarDto } from './create-oscar.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateOscarDto extends PartialType(CreateOscarDto) {
  @ApiProperty({
    required: false,
    description: 'A film megjelenésének éve.',
    type: Number,
    example: 2026,
  })
  year: number;

  @ApiProperty({
    required: false,
    description: 'A film címe.',
    type: String,
    example: 'Élet',
  })
  title: string;

  @ApiProperty({
    required: false,
    description: 'A film rövid leirása.',
    type: String,
    example: 'Egy összetett és megható film az életről',
  })
  description: string;

  @ApiProperty({
    required: false,
    description: 'A film rendezőjének a neve.',
    type: String,
    example: 'John Smith',
  })
  director: string;

  @ApiProperty({
    required: false,
    description: 'A film megnyerte-e az Oscar-t?',
    type: Boolean,
    example: false,
  })
  isWon: boolean;
}
