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
} from 'class-validator';

export class CreateFormDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsDate()
  @IsNotEmpty()
  Date: Date;

  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'Username must have atleast 3 characters.' })
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
