import { Module, forwardRef } from "@nestjs/common";
import { FriendController } from "./friend.controller";
import { FriendService } from "./friend.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { AuthModule } from "src/auth/auth.module";
import { User } from "src/users/users.models";
import { Friends } from "./friend.models";

@Module({
  controllers: [FriendController],
  providers: [FriendService],
  imports: [SequelizeModule.forFeature([Friends, User]), forwardRef(() => AuthModule)],
})
export class FriendModule {}
