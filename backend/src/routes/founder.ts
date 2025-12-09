import { Router } from 'express';
import { NorahFounderCore } from '../core/NorahFounderCore.js';

export const founderRouter = Router();

founderRouter.post('/activate', (req, res) => {
  const core: NorahFounderCore = req.app.locals.founderCore;
  const { command, token } = req.body;
  res.json(core.activate(command, token));
});

founderRouter.get('/logs', (req, res) => {
  const core: NorahFounderCore = req.app.locals.founderCore;
  res.json(core.monitorLogs());
});
