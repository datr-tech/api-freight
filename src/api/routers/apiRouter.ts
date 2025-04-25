import { Router } from 'express';
import { options } from '@datr.tech/leith-config-api-router-options';
import { campaignRouter } from './campaignRouter';
import { campaignTypeRouter } from './campaignTypeRouter';
import { projectRouter } from './projectRouter';
import { projectTypeRouter } from './projectTypeRouter';
import { templateRouter } from './templateRouter';
import { templateTypeRouter } from './templateTypeRouter';

export const apiRouter = Router(options)
  .use('/api/v1/campaignRouter', campaignRouter)
  .use('/api/v1/campaignTypeRouter', campaignTypeRouter)
  .use('/api/v1/projectRouter', projectRouter)
  .use('/api/v1/projectTypeRouter', projectTypeRouter)
  .use('/api/v1/templateRouter', templateRouter)
  .use('/api/v1/templateTypeRouter', templateTypeRouter);
