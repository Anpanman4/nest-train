import { Module } from "@nestjs/common";
import { TodosController } from "./todos.controller";
import { TodosService } from "./todos.service";
import { Todos } from "./todos.models";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "src/users/users.models";

@Module({
  controllers: [TodosController],
  providers: [TodosService],
  imports: [SequelizeModule.forFeature([Todos, User])],
})
export class TodosModule {}
