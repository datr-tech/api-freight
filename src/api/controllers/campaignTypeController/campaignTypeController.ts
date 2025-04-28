import { campaignTypeControllerCreateCampaignType } from './campaignTypeControllerCreateCampaignType';
import { campaignTypeControllerDeleteCampaignType } from './campaignTypeControllerDeleteCampaignType';
import { campaignTypeControllerReadCampaignType } from './campaignTypeControllerReadCampaignType';
import { campaignTypeControllerUpdateCampaignType } from './campaignTypeControllerUpdateCampaignType';

export const campaignTypeController = {
  createCampaignType: campaignTypeControllerCreateCampaignType,
  updateCampaignType: campaignTypeControllerUpdateCampaignType,
  readCampaignType: campaignTypeControllerReadCampaignType,
  deleteCampaignType: campaignTypeControllerDeleteCampaignType,
};
