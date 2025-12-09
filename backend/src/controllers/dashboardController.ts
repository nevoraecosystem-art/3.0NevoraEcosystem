import { Request, Response } from 'express';
import { listMonetizationRules } from '../services/monetizationService.js';

export function getDashboard(_req: Request, res: Response) {
  res.json({
    status: 'online',
    monetization: listMonetizationRules(),
    message: 'Dashboard básico operacional',
  });
}
