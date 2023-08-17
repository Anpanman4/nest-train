import { Module, forwardRef } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users.models";
import { Todos } from "src/todos/todos.models";
import { AuthModule } from "src/auth/auth.module";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([User, Todos]), forwardRef(() => AuthModule)],
  exports: [UsersService],
})
export class UsersModule {}
