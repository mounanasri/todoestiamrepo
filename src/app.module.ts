import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

// import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TodosController } from './todos/todos.controller';
import { TodosService } from './todos/todos.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'mouna1234',
    //   database: '',
    //   entities: [],
    //   synchronize: true,
    // }),
    PrismaModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController, TodosController],
  providers: [AppService, TodosService],
})
export class AppModule {}
