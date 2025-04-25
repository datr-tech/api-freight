import { Router } from 'express';
import { options } from '@datr.tech/leith-config-api-router-options';
import { campaignTypeRouterCreateCampaignType } from './campaignTypeRouterCreateCampaignType';
import { campaignTypeRouterDeleteCampaignType } from './campaignTypeRouterDeleteCampaignType';
import { campaignTypeRouterReadCampaignType } from './campaignTypeRouterReadCampaignType';
import { campaignTypeRouterUpdateCampaignType } from './campaignTypeRouterUpdateCampaignType';

export const campaignTypeRouter = Router(options)
  .use('/', campaignTypeRouterCreateCampaignType)
  .use('/:campaignTypeId', campaignTypeRouterDeleteCampaignType)
  .use('/:campaignTypeId', campaignTypeRouterReadCampaignType)
  .use('/:campaignTypeId', campaignTypeRouterUpdateCampaignType);
