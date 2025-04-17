import { campaignControllerCreateCampaign } from './campaignControllerCreateCampaign';
import { campaignControllerUpdateCampaign } from './campaignControllerUpdateCampaign';
import { campaignControllerReadCampaign } from './campaignControllerReadCampaign';
import { campaignControllerDeleteCampaign } from './campaignControllerDeleteCampaign';

export const campaignController = {
  createCampaign: campaignControllerCreateCampaign,
  updateCampaign: campaignControllerUpdateCampaign,
  readCampaign: campaignControllerReadCampaign,
  deleteCampaign: campaignControllerDeleteCampaign,
};
