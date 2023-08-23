import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "Anpanman4", description: "Никнейм" })
  readonly username: string;

  @ApiProperty({ example: "12345678", description: "Пароль" })
  readonly password: string;

  @ApiProperty({ example: "Алексей", description: "Имя" })
  readonly name: string;

  @ApiProperty({ example: "Кондратьев", description: "Фамилия" })
  readonly surname: string;
}
