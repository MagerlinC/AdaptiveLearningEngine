export class EloResult {
  playerAChange: number;
  playerBChange: number;
  constructor(aNum: number, bNum: number) {
    this.playerAChange = aNum;
    this.playerBChange = bNum;
  }
}
