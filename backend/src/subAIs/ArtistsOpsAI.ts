export class ArtistsOpsAI {
  handle(input: string) {
    return { segment: 'artists', response: `ArtistsOpsAI recebeu: ${input}`, nextSteps: ['Negociar cachê', 'Agendar shows'] };
  }
}
