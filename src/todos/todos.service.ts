import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TodosService {
  constructor(private readonly prisma: PrismaService) {}
  create(todo: Prisma.TodoCreateInput) {
    return this.prisma.todo.create({
      data: todo,
    });
  }

  findAll() {
    return this.prisma.todo.findMany();
  }

  findOne(todo_id: number) {
    return this.prisma.todo.findUnique({
      where: {
        todo_id,
      },
    });
  }

  update(todo_id: number, todo: Prisma.TodoUpdateInput) {
    return this.prisma.todo.update({
      where: {
        todo_id,
      },
      data: todo,
    });
  }

  remove(todo_id: number) {
    return this.prisma.todo.delete({
      where: {
        todo_id,
      },
    });
  }
}
