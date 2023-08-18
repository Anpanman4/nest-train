import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { FriendService } from "./friend.service";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { CreateFriendsDto } from "./dto/create-friends.dto";

@Controller("friend")
export class FriendController {
  constructor(private friendService: FriendService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  addFriend(@Body() dto: CreateFriendsDto) {
    return this.friendService.addFriend(dto);
  }
}
