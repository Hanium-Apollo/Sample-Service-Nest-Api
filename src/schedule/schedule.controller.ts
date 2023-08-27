import {
  Controller,
  Post,
  Get,
  Patch,
  Param,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { Body } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Schedule } from './entities/schedule.entity';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post()
  async create(@Body() createScheduleDto: CreateScheduleDto) {
    return await this.scheduleService.create(createScheduleDto);
  }

  @Get()
  async findAll(): Promise<Schedule[]> {
    return await this.scheduleService.findAll();
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateScheduleDto: UpdateScheduleDto,
  ) {
    return await this.scheduleService.update(id, updateScheduleDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.scheduleService.delete(id);
  }
}
