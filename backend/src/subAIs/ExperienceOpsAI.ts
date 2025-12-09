export class ExperienceOpsAI {
  handle(input: string) {
    return { segment: 'experience', response: `ExperienceOpsAI recebeu: ${input}`, nextSteps: ['Criar ativações', 'Avaliar NPS'] };
  }
}
