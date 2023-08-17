import { Injectable } from "@nestjs/common";
import { User } from "./users.models";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async getUsers() {
    const users = await this.userRepository.findAll();
    return users;
  }

  async getUser(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    return user;
  }

  async getUserByUsername(username: string) {
    const user = await this.userRepository.findOne({ where: { username } });
    return user;
  }

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    return user;
  }

  async updateUser(dto: CreateUserDto, id: number) {
    await this.userRepository.update(dto, { where: { id: id } });
    const newUser = await this.userRepository.findByPk(id);
    return newUser;
  }

  async deleteUser(id: number) {
    const isDelete = await this.userRepository.destroy({ where: { id } });
    if (isDelete) {
      return `Пользователь с ID ${id} был удален`;
    }
    return `Пользователь с ID ${id} не существует`;
  }
}
