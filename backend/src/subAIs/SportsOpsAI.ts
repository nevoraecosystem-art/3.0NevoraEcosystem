export class SportsOpsAI {
  handle(input: string) {
    return { segment: 'esportes', response: `SportsOpsAI recebeu: ${input}`, nextSteps: ['Analisar torcida', 'Planejar segurança'] };
  }
}
