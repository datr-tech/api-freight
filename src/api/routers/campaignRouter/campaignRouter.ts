import { Router } from 'express';
import { options } from '@datr.tech/leith-config-api-router-options';
import { campaignRouterCreateCampaign } from './campaignRouterCreateCampaign';
import { campaignRouterDeleteCampaign } from './campaignRouterDeleteCampaign';
import { campaignRouterReadCampaign } from './campaignRouterReadCampaign';
import { campaignRouterUpdateCampaign } from './campaignRouterUpdateCampaign';

export const campaignRouter = Router(options)
  .use('/', campaignRouterCreateCampaign)
  .use('/:campaignId', campaignRouterDeleteCampaign)
  .use('/:campaignId', campaignRouterReadCampaign)
  .use('/:campaignId', campaignRouterUpdateCampaign);
