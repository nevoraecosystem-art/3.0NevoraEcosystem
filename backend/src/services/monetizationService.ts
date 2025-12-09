import { EconomicsEngine, MonetizationRule } from '../core/EconomicsEngine.js';

const engine = new EconomicsEngine();

export function listMonetizationRules(): MonetizationRule[] {
  return engine.listRules();
}

export function addMonetizationRule(rule: MonetizationRule) {
  engine.addRule(rule);
  return rule;
}
