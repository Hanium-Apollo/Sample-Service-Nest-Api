import { Injectable } from '@nestjs/common';
import { Schedule } from './entities/schedule.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Schedule)
    private scheduleRepository: Repository<Schedule>,
  ) {}

  async create(createScheduleDto: CreateScheduleDto): Promise<Schedule> {
    const schedule = this.scheduleRepository.create({
      content: createScheduleDto.content,
    });
    return await this.scheduleRepository.save(schedule);
  }

  async findAll(): Promise<Schedule[]> {
    return await this.scheduleRepository.find();
  }

  async findOne(id: number): Promise<Schedule> {
    return await this.scheduleRepository.findOne({ where: { id: id } });
  }

  async update(
    id: number,
    updateScheduleDto: UpdateScheduleDto,
  ): Promise<Schedule> {
    await this.scheduleRepository.update(id, {
      content: updateScheduleDto.content,
    });
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.scheduleRepository.delete(id);
  }
}
