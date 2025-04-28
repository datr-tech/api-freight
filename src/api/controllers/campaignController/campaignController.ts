import { campaignControllerCreateCampaign } from './campaignControllerCreateCampaign';
import { campaignControllerDeleteCampaign } from './campaignControllerDeleteCampaign';
import { campaignControllerReadCampaign } from './campaignControllerReadCampaign';
import { campaignControllerUpdateCampaign } from './campaignControllerUpdateCampaign';

export const campaignController = {
  createCampaign: campaignControllerCreateCampaign,
  updateCampaign: campaignControllerUpdateCampaign,
  readCampaign: campaignControllerReadCampaign,
  deleteCampaign: campaignControllerDeleteCampaign,
};
