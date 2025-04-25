import { options } from '@datr.tech/leith-config-api-router-options';
import { Router } from 'express';
import { campaignRouter } from './campaignRouter';
import { campaignTypeRouter } from './campaignTypeRouter';
import { projectRouter } from './projectRouter';
import { projectTypeRouter } from './projectTypeRouter';
import { templateRouter } from './templateRouter';
import { templateTypeRouter } from './templateTypeRouter';

export const apiRouter = Router(options)
  .use('/api/v1/campaign', campaignRouter)
  .use('/api/v1/campaignType', campaignTypeRouter)
  .use('/api/v1/project', projectRouter)
  .use('/api/v1/projectType', projectTypeRouter)
  .use('/api/v1/template', templateRouter)
  .use('/api/v1/templateType', templateTypeRouter);
