export class CreateCashBoxDto {
  cash: number;
  coins: { [key: string]: number };
}
