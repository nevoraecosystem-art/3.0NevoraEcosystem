export class BarOpsAI {
  handle(input: string) {
    return { segment: 'barops', response: `BarOpsAI recebeu: ${input}`, nextSteps: ['Otimizar cardápio', 'Planejar estoque'] };
  }
}
