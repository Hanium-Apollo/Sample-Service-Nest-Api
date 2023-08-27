import { IsString } from 'class-validator';

export class UpdateScheduleDto {
  @IsString()
  readonly content: string;
}
