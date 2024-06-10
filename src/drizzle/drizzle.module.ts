import { Module } from '@nestjs/common';
import { DrizzleService } from './drizzle.service';

@Module({
  imports: [],
  controllers: [],
  providers: [DrizzleService],
})
export class DrizzleModule {}
