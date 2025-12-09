export class EduOpsAI {
  handle(input: string) {
    return { segment: 'educacional', response: `EduOpsAI recebeu: ${input}`, nextSteps: ['Emitir certificados', 'Planejar grade'] };
  }
}
