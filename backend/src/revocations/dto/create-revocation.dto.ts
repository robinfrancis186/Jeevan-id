import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRevocationDto {
  @IsString()
  @IsNotEmpty()
  personId: string;

  @IsOptional()
  @IsString()
  reason?: string;
}
