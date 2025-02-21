import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOscarDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'A film megjelenésének éve.',
    type: Number,
    example: 2026,
  })
  year: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'A film címe.',
    type: String,
    example: 'Élet',
  })
  title: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'A film rövid leirása.',
    type: String,
    example: 'Egy összetett és megható film az életről',
  })
  description: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'A film rendezőjének a neve.',
    type: String,
    example: 'John Smith',
  })
  director: string;

  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty({
    description: 'A film megnyerte-e az Oscar-t?',
    type: Boolean,
    example: false,
  })
  isWon: boolean;
}
