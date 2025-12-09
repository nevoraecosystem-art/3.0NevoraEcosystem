import { Router } from 'express';
import { NevoraEventsAI } from '../subAIs/NevoraEventsAI.js';
import { ArtistsOpsAI } from '../subAIs/ArtistsOpsAI.js';
import { MarketplaceOpsAI } from '../subAIs/MarketplaceOpsAI.js';
import { PrefectureOpsAI } from '../subAIs/PrefectureOpsAI.js';
import { BarOpsAI } from '../subAIs/BarOpsAI.js';
import { ExperienceOpsAI } from '../subAIs/ExperienceOpsAI.js';
import { CorporateOpsAI } from '../subAIs/CorporateOpsAI.js';
import { SportsOpsAI } from '../subAIs/SportsOpsAI.js';
import { FormaturasOpsAI } from '../subAIs/FormaturasOpsAI.js';
import { EduOpsAI } from '../subAIs/EduOpsAI.js';
import { ReligiousOpsAI } from '../subAIs/ReligiousOpsAI.js';
import { WeddingOpsAI } from '../subAIs/WeddingOpsAI.js';

const handlers = {
  events: new NevoraEventsAI(),
  artists: new ArtistsOpsAI(),
  marketplace: new MarketplaceOpsAI(),
  prefeituras: new PrefectureOpsAI(),
  barops: new BarOpsAI(),
  experience: new ExperienceOpsAI(),
  corporativo: new CorporateOpsAI(),
  esportes: new SportsOpsAI(),
  formaturas: new FormaturasOpsAI(),
  educacional: new EduOpsAI(),
  religioso: new ReligiousOpsAI(),
  casamentos: new WeddingOpsAI(),
};

export const eventsRouter = Router();

eventsRouter.post('/:segment', (req, res) => {
  const { segment } = req.params;
  const ai = handlers[segment as keyof typeof handlers];
  if (!ai) return res.status(404).json({ error: 'Segmento não encontrado' });
  res.json(ai.handle(req.body.message || '')); 
});

eventsRouter.get('/', (_req, res) => {
  res.json({ segments: Object.keys(handlers) });
});
