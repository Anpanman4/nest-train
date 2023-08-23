import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.models";

interface IFriendsCreationAttrs {
  userId: number;
}

@Table({ tableName: "friend" })
export class Friends extends Model<Friends, IFriendsCreationAttrs> {
  @ApiProperty({ example: 1, description: "Уникальный ID" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 1, description: "ID друга" })
  @Column({ type: DataType.INTEGER, allowNull: false })
  friendId: number;

  @ApiProperty({ example: 2, description: "ID пользователя" })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  friend: User;
}
