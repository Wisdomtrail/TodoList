import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module'; 
import { TodoModule } from './todo/todo/todo.module';

@Module({
  imports: [DatabaseModule, TodoModule],
})
export class AppModule {}
