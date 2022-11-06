import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
// import { query } from 'express';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() todo: Prisma.TodoCreateInput) {
    return this.todosService.create(todo);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return this.todosService.findOne(+id);
  }

  @Get()
  findAll() {
    return this.todosService.findAll();
    //return this.todosService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todosService.remove(+id);
  }

  @Put()
  update(@Query('id') id: number, @Body() todo: Prisma.TodoUpdateInput) {
    return this.todosService.update(+id, todo);
  }
}
