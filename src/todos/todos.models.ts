import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.models";

interface ITodosCreationAttrs {
  description: string;
}

@Table({ tableName: "todos" })
export class Todos extends Model<Todos, ITodosCreationAttrs> {
  @ApiProperty({ example: 1, description: "Уникальный ID" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({
    example: "Завтра перевести бабушку через пешеходный переход",
    description: "Описание дела",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @ApiProperty({ example: "true", description: "Сделано ли дело" })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isDone: boolean;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number;
}
