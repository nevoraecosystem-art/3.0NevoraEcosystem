import { createServer } from './server.js';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 4000;
const app = createServer();

app.listen(port, () => {
  console.log(`Nevora HyperServer running on port ${port}`);
});
