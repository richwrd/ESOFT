export class CreateUserDto {
  nome: string;
  sobrenome: string;
  idade: number;
  email: string;
  senha: string;
  image?: string | Buffer;
  cpf: string;
  endereco: string;
}
