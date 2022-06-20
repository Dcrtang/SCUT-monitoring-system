import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { ConfigService } from './config.service';
import { Config } from './entities/config.entity';

@Controller('config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}
  @Get()
  findAll() {
    return this.configService.getConfig();
  }

  @Patch()
  update(@Body() updateConfigDto: Config) {
    return this.configService.update(updateConfigDto);
  }
}
