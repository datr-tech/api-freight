import { campaignTypeControllerCreateCampaignType } from './campaignTypeControllerCreateCampaignType';
import { campaignTypeControllerUpdateCampaignType } from './campaignTypeControllerUpdateCampaignType';
import { campaignTypeControllerReadCampaignType } from './campaignTypeControllerReadCampaignType';
import { campaignTypeControllerDeleteCampaignType } from './campaignTypeControllerDeleteCampaignType';

export const campaignTypeController = {
  createCampaignType: campaignTypeControllerCreateCampaignType,
  updateCampaignType: campaignTypeControllerUpdateCampaignType,
  readCampaignType: campaignTypeControllerReadCampaignType,
  deleteCampaignType: campaignTypeControllerDeleteCampaignType,
};
