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
  @Post()
  create(@Body() todo: Prisma.TodoCreateInput) {
    return this.todosService.create(todo);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() todo: Prisma.TodoUpdateInput) {
    return this.todosService.update(+id, todo);
  }
}
