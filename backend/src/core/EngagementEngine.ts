import { v4 as uuid } from 'uuid';

type Persona =
  | 'produtor'
  | 'artista'
  | 'prefeitura'
  | 'empresa'
  | 'prestador'
  | 'embaixador'
  | 'cliente final'
  | 'organizador esportivo'
  | 'organizador religioso'
  | 'agencia de formatura'
  | 'organizador educacional';

export type EngagementScript = {
  persona: Persona;
  script: string;
  suggestions: string[];
};

const scripts: Record<Persona, EngagementScript> = {
  produtor: {
    persona: 'produtor',
    script: 'Bem-vindo produtor! Vou conectar você aos hunters certos e sugerir monetização de ingressos.',
    suggestions: ['Configurar evento musical', 'Ativar ticket hunter', 'Ver taxas e projeções'],
  },
  artista: {
    persona: 'artista',
    script: 'Olá artista! Vamos otimizar cachês, divulgar eventos e conectar com produtores.',
    suggestions: ['Criar perfil no marketplace', 'Analisar agenda', 'Negociar com prefeituras'],
  },
  prefeitura: {
    persona: 'prefeitura',
    script: 'Gestão pública premium ativa. Vamos estruturar contratos, compliance e transparência.',
    suggestions: ['Configurar contrato premium', 'Auditar eventos', 'Acionar PrefectureOpsAI'],
  },
  empresa: {
    persona: 'empresa',
    script: 'Setor corporativo habilitado. Integração com eventos internos e externos.',
    suggestions: ['Planejar convenção', 'Dashboard ESG', 'Acionar CorporateOpsAI'],
  },
  prestador: {
    persona: 'prestador',
    script: 'Prestador detectado. Vamos alinhar SLAs e oportunidades em eventos.',
    suggestions: ['Cadastrar serviços', 'Monitorar pagamentos', 'Ver oportunidades por segmento'],
  },
  embaixador: {
    persona: 'embaixador',
    script: 'Bem-vindo embaixador! Incentivos e campanhas customizadas.',
    suggestions: ['Gerar links de indicação', 'Ver pontuação', 'Contactar EngagementEngine'],
  },
  'cliente final': {
    persona: 'cliente final',
    script: 'Cliente final conectado. Ofertas personalizadas e check-in inteligente.',
    suggestions: ['Buscar eventos', 'Comprar ingressos', 'Ativar check-in offline'],
  },
  'organizador esportivo': {
    persona: 'organizador esportivo',
    script: 'Fluxo esportivo pronto. Vamos mapear torcida, merchandising e segurança.',
    suggestions: ['Criar campeonato', 'Acionar SportsOpsAI', 'Configurar monetização torcida'],
  },
  'organizador religioso': {
    persona: 'organizador religioso',
    script: 'Eventos religiosos requerem sensibilidade. Podemos sugerir logística e arrecadação.',
    suggestions: ['Planejar celebração', 'Gerenciar voluntários', 'Ativar ReligiousOpsAI'],
  },
  'agencia de formatura': {
    persona: 'agencia de formatura',
    script: 'Formaturas com planos de assinatura, fornecedores e orçamentos.',
    suggestions: ['Criar pacotes', 'Contratar artistas', 'Gerenciar assinatura'],
  },
  'organizador educacional': {
    persona: 'organizador educacional',
    script: 'Eventos educacionais com certificação e experiências híbridas.',
    suggestions: ['Criar congresso', 'Emitir certificados', 'Acionar EduOpsAI'],
  },
};

export class EngagementEngine {
  private logs: { id: string; persona: Persona; message: string; createdAt: string }[] = [];

  detectPersona(input: string): Persona {
    const normalized = input.toLowerCase();
    const entry = (Object.keys(scripts) as Persona[]).find((persona) => normalized.includes(persona));
    return entry ?? 'cliente final';
  }

  getScript(persona: Persona): EngagementScript {
    return scripts[persona];
  }

  routeRequest(input: string) {
    const persona = this.detectPersona(input);
    const script = this.getScript(persona);
    const id = uuid();
    const logEntry = { id, persona, message: input, createdAt: new Date().toISOString() };
    this.logs.push(logEntry);
    return {
      id,
      persona,
      script,
      leadScore: this.calculateLeadScore(persona, input),
    };
  }

  private calculateLeadScore(persona: Persona, input: string) {
    const lengthFactor = Math.min(100, input.length);
    const personaWeight = ['prefeitura', 'empresa', 'produtor'].includes(persona) ? 30 : 10;
    return Math.min(100, 40 + personaWeight + Math.floor(lengthFactor / 5));
  }

  getLogs() {
    return this.logs;
  }
}
