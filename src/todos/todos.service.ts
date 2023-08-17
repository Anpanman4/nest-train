import { Injectable } from "@nestjs/common";
import { CreateTodosDto } from "./dto/create-todos.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Todos } from "./todos.models";
import { where } from "sequelize";

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todos) private todosRepository: typeof Todos) {}

  async getTodos() {
    const todos = await this.todosRepository.findAll();
    return todos;
  }

  async getTodosById(userId: number) {
    const todos = await this.todosRepository.findAll({ where: { userId } });
    return todos;
  }

  async createTodo(dto: CreateTodosDto) {
    const todo = await this.todosRepository.create(dto);
    return todo;
  }

  async updateTodo(dto: CreateTodosDto, todoId: number) {
    await this.todosRepository.update(dto, { where: { id: todoId } });
    const todo = this.todosRepository.findByPk(todoId);
    return todo;
  }
}
