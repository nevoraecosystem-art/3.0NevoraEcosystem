export class NevoraEventsAI {
  handle(input: string) {
    return { segment: 'events', response: `NevoraEventsAI recebeu: ${input}`, nextSteps: ['Segmentar público', 'Sincronizar ticket hunter'] };
  }
}
