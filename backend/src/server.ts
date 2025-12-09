import express from 'express';
import cors from 'cors';
import { router } from './routes/index.js';
import { EngagementEngine } from './core/EngagementEngine.js';
import { NorahFounderCore } from './core/NorahFounderCore.js';

export function createServer() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  const engagementEngine = new EngagementEngine();
  const founderCore = new NorahFounderCore(engagementEngine);

  app.use((req, _res, next) => {
    req.app.locals.engagementEngine = engagementEngine;
    req.app.locals.founderCore = founderCore;
    next();
  });

  app.use('/api', router);

  app.get('/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  return app;
}
