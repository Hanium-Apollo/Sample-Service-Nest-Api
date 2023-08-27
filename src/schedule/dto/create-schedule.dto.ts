import { IsString } from 'class-validator';

export class CreateScheduleDto {
  @IsString()
  readonly content: string;
}
