import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
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
    console.log(todo.titre);
    console.log(todo.statut);
    console.log(todo.description);
    return this.todosService.create(todo);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() todo: Prisma.TodoUpdateInput) {
    console.log(+id);
    return await this.todosService.update(+id, todo);
  }
}
