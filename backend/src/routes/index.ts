import { Router } from 'express';
import { engagementRouter } from './engagement.js';
import { founderRouter } from './founder.js';
import { eventsRouter } from './segments.js';
import { dashboardRouter } from './dashboard.js';

export const router = Router();

router.use('/engagement', engagementRouter);
router.use('/founder', founderRouter);
router.use('/segments', eventsRouter);
router.use('/dashboard', dashboardRouter);
