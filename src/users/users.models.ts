import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IUserCreationAttrs {
  username: string;
  password: string;
  name: string;
  surname: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, IUserCreationAttrs> {
  @ApiProperty({ example: 1, description: "Уникальный ID" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: "Anpanman4", description: "Никнейм" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  username: string;

  @ApiProperty({ example: "12345678", description: "Пароль" })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: "Алексей", description: "Имя" })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({ example: "Кондратьев", description: "Фамилия" })
  @Column({ type: DataType.STRING, allowNull: false })
  surname: string;
}
