import { Injectable } from "@nestjs/common";
import { Friends } from "./friend.models";
import { InjectModel } from "@nestjs/sequelize";
import { CreateFriendsDto } from "./dto/create-friends.dto";

@Injectable()
export class FriendService {
  constructor(@InjectModel(Friends) private friendsRepository: typeof Friends) {}

  async addFriend(dto: CreateFriendsDto) {
    const friend = await this.friendsRepository.create(dto);
    return friend;
  }
}
