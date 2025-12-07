import {
  IsString,
  IsOptional,
  IsObject,
  IsDateString,
  IsNotEmpty,
} from 'class-validator';

export class CreatePersonDto {
  @IsString()
  @IsNotEmpty()
  alias: string;

  @IsString()
  @IsNotEmpty()
  approxAgeBand: string;

  @IsOptional()
  @IsString()
  genderOpt?: string;

  @IsOptional()
  @IsObject()
  healthFlags?: Record<string, unknown>;

  @IsOptional()
  @IsString()
  photoRef?: string;

  @IsOptional()
  @IsString()
  guardianId?: string;

  @IsString()
  @IsNotEmpty()
  issuingOrg: string;

  @IsObject()
  consentRecord: Record<string, unknown>;

  @IsOptional()
  @IsDateString()
  expiresAt?: string;
}

