import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.models";
import { TodosModule } from "./todos/todos.module";
import { Todos } from "./todos/todos.models";
import { AuthModule } from "./auth/auth.module";
import { FriendModule } from "./friend/friend.module";
import { Friends } from "./friend/friend.models";

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Todos, Friends],
      autoLoadModels: true,
    }),
    UsersModule,
    TodosModule,
    AuthModule,
    FriendModule,
  ],
})
export class AppModule {}
