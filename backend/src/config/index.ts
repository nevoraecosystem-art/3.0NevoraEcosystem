export const config = {
  databaseUrl: process.env.DATABASE_URL || 'memory://nevora',
  jwtSecret: process.env.JWT_SECRET || 'nevora-secret',
};
