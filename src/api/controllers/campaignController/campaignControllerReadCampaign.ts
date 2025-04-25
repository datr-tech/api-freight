import { CampaignModel } from '@app-af/api/models';

export const campaignControllerReadCampaign = async ({ campaignId }) => {
  const campaign = await CampaignModel.findById(campaignId);

  return campaign;
};
