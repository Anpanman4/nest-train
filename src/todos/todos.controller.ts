import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { TodosService } from "./todos.service";
import { CreateTodosDto } from "./dto/create-todos.dto";

@Controller("/todos")
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  getAll() {
    return this.todosService.getTodos();
  }

  @Get("/:userId")
  getAllTodosById(@Param("userId") userId: number) {
    return this.todosService.getTodosById(userId);
  }

  @Post()
  create(@Body() dto: CreateTodosDto) {
    return this.todosService.createTodo(dto);
  }

  @Put("/:todoId")
  updateTodo(@Body() dto: CreateTodosDto, @Param("todoId") todoId: number) {
    return this.todosService.updateTodo(dto, todoId);
  }
}
