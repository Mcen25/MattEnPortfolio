import {
  IsAlphanumeric,
  IsEmail,
  isEnum,
  IsEnum,
  IsInt,
  IsDate,
  IsNotEmpty,
  isString,
  IsString,
  Matches,
  MinLength,
  IsDateString,
} from 'class-validator';

export class CreateFormDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsDateString()
  Date: Date;

  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'Feedback must have atleast 3 characters.' })
  Feedback: string;

  @IsEnum([
    'Home',
    'About',
    'Projects',
    'Constellation Website',
    'Game Jam #14',
  ])
  @IsNotEmpty()
  About: string;
}
