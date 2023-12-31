import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./users.models";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@ApiTags("Пользователи")
@Controller("/users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: "Получение всех пользователей" })
  @ApiResponse({ status: 200, type: [User] })
  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.usersService.getUsers();
  }

  @ApiOperation({ summary: "Получение пользователя" })
  @ApiResponse({ status: 200, type: User })
  @UseGuards(JwtAuthGuard)
  @Get("/:id")
  getById(@Param("id") id: number) {
    return this.usersService.getUser(id);
  }

  @ApiOperation({ summary: "Создание пользователя" })
  @ApiResponse({ status: 201, type: User })
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: "Обновление пользователя" })
  @ApiResponse({ status: 200, type: User })
  @UseGuards(JwtAuthGuard)
  @Put("/:id")
  update(@Body() userDto: CreateUserDto, @Param("id") id: number) {
    return this.usersService.updateUser(userDto, id);
  }

  @ApiOperation({ summary: "Удаление пользователя" })
  @ApiResponse({ status: 200, type: User })
  @UseGuards(JwtAuthGuard)
  @Delete("/:id")
  delete(@Param("id") id: number) {
    return this.usersService.deleteUser(id);
  }
}
