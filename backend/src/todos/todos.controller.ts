import { Body, Controller, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { TodosService } from "./todos.service";
import { CreateTodosDto } from "./dto/create-todos.dto";
import { ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@ApiTags("Списки дел")
@Controller("/todos")
export class TodosController {
  constructor(private todosService: TodosService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.todosService.getTodos();
  }

  @UseGuards(JwtAuthGuard)
  @Get("/:userId")
  getAllTodosById(@Param("userId") userId: number) {
    return this.todosService.getTodosById(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateTodosDto) {
    return this.todosService.createTodo(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Put("/:todoId")
  updateTodo(@Body() dto: CreateTodosDto, @Param("todoId") todoId: number) {
    return this.todosService.updateTodo(dto, todoId);
  }
}
