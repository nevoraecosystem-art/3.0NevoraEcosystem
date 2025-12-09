import { Router } from 'express';
import { EngagementEngine } from '../core/EngagementEngine.js';

export const engagementRouter = Router();

engagementRouter.post('/', (req, res) => {
  const engine: EngagementEngine = req.app.locals.engagementEngine;
  const { message } = req.body;
  const result = engine.routeRequest(message || '');
  res.json(result);
});

engagementRouter.get('/logs', (_req, res) => {
  const engine: EngagementEngine = _req.app.locals.engagementEngine;
  res.json(engine.getLogs());
});
