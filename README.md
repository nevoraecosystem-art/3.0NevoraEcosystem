# Nevora Ecosystem 3.0

Repositório completo gerado para o Nevora Ecosystem: backend HyperServer 3.0, frontend web e apps móveis Expo.

## Estrutura
- `backend/` – HyperServer 3.0 em TypeScript/Express com Engajamento, Hunters, Governança, Economia e Créditos.
- `frontend-web/` – Vite + React com dashboards segmentados, atendimento Norah e ativação Founder.
- `app-founder/` – App Expo com ativação secreta do Founder.
- `app-norah-lite/` – App Expo minimalista de atendimento.
- `docs/` – Guia rápido de módulos e monetização.

## Requisitos de execução
### Backend
```bash
cd backend
npm install
npm run dev
```
A API responde em `http://localhost:4000` com rotas `/health`, `/api/engagement`, `/api/founder/activate`, `/api/segments/:segment` e `/api/dashboard`.

### Frontend Web
```bash
cd frontend-web
npm install
npm run dev
```
A aplicação conecta no backend (mesma origem quando executados juntos via proxy) e expõe dashboard, atendimento e segmentação.

### Apps Expo
Cada app pode ser iniciado individualmente:
```bash
cd app-founder # ou app-norah-lite
npm install
npm start
```

## Funcionalidades principais
- **Norah EngagementEngine**: detecção de persona, roteamento, roteiros por segmento e lead scoring automático.
- **Norah Founder Core**: comando `SOU FUNDADOR` + token fixo para liberar controles executivos.
- **Sub-IAs dedicadas**: eventos, artistas, marketplace, prefeituras, bar, experiências, corporativo, esportes, formaturas, educacional, religioso e casamentos.
- **Hunters**: varredura de oportunidades por segmento e monitoramento básico.
- **Monetização**: taxas configuradas para ingressos, marketplace, créditos NEV e planos PRO por segmento.
- **Dashboards**: produtor, artista e prefeitura contemplados via rotas e telas segmentadas.

## Segurança e logs
- Engajamento registra logs para auditoria rápida.
- Founder Core só libera poderes com token soberano fixo.

Gere um repositório COMPLETO, com backend, frontend, apps e documentação, seguindo rigorosamente todas as especificações acima. O resultado deve estar pronto para uso imediato após o download.
