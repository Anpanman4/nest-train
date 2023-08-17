import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { UsersService } from "src/users/users.service";
import * as bcrypt from "bcryptjs";
import { User } from "src/users/users.models";

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) {}

  async login(dto: CreateUserDto) {}

  async register(dto: CreateUserDto) {
    const candidate = await this.userService.getUserByUsername(dto.username);
    if (candidate) {
      throw new HttpException("Пользователь с таким никнеймом уже существует", HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await bcrypt.hash(dto.password, 5);
    const user = await this.userService.createUser({ ...dto, password: hashPassword });
    return await this.generateToken(user);
  }

  async generateToken(user: User) {
    const payload = { username: user.username, id: user.id, name: user.name };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
