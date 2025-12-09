export class FormaturasOpsAI {
  handle(input: string) {
    return { segment: 'formaturas', response: `FormaturasOpsAI recebeu: ${input}`, nextSteps: ['Calcular assinatura', 'Gerir fornecedores'] };
  }
}
