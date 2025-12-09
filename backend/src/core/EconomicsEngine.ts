export type MonetizationRule = {
  segment: string;
  revenueShare: number;
  description: string;
};

export class EconomicsEngine {
  private rules: MonetizationRule[] = [
    { segment: 'ingressos', revenueShare: 0.07, description: 'Taxa padrão de ingressos (7%)' },
    { segment: 'marketplace', revenueShare: 0.02, description: 'Comissão marketplace mínima (2%)' },
    { segment: 'marketplace-premium', revenueShare: 0.07, description: 'Comissão marketplace máxima (7%)' },
  ];

  listRules() {
    return this.rules;
  }

  addRule(rule: MonetizationRule) {
    this.rules.push(rule);
  }
}
