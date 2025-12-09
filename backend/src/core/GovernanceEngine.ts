export class GovernanceEngine {
  constructor(private policies: string[] = ['compliance', 'security', 'audit']) {}

  getPolicies() {
    return this.policies;
  }

  addPolicy(policy: string) {
    this.policies.push(policy);
  }
}
