export class WeddingOpsAI {
  handle(input: string) {
    return { segment: 'casamentos', response: `WeddingOpsAI recebeu: ${input}`, nextSteps: ['Customizar assinatura', 'Selecionar fornecedores'] };
  }
}
