export class MarketplaceOpsAI {
  handle(input: string) {
    return { segment: 'marketplace', response: `MarketplaceOpsAI recebeu: ${input}`, nextSteps: ['Calcular comissão', 'Publicar oferta'] };
  }
}
