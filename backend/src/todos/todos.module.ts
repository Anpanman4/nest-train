import { Module, forwardRef } from "@nestjs/common";
import { TodosController } from "./todos.controller";
import { TodosService } from "./todos.service";
import { Todos } from "./todos.models";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "src/users/users.models";
import { AuthModule } from "src/auth/auth.module";

@Module({
  controllers: [TodosController],
  providers: [TodosService],
  imports: [SequelizeModule.forFeature([Todos, User]), forwardRef(() => AuthModule)],
})
export class TodosModule {}
