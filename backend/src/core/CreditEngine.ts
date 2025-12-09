export class CreditEngine {
  private balances: Record<string, number> = {};

  grant(userId: string, amount: number) {
    this.balances[userId] = (this.balances[userId] || 0) + amount;
    return this.balances[userId];
  }

  debit(userId: string, amount: number) {
    const current = this.balances[userId] || 0;
    if (current < amount) throw new Error('Saldo insuficiente');
    this.balances[userId] = current - amount;
    return this.balances[userId];
  }

  getBalance(userId: string) {
    return this.balances[userId] || 0;
  }
}
