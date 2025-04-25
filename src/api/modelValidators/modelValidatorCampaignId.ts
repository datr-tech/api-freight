import { CampaignModel } from '@app-af/api/models';

export const modelValidatorCampaignId = async (doc, next) => {
  let campaign;
  let campaignId;

  if (doc && typeof doc.campaignId !== 'undefined') {
    campaignId = doc.campaignId;
  }

  if (campaignId) {
    campaign = await CampaignModel.findById(campaignId);
  }

  if (!campaign) {
    throw new Error('campaignId: invalid');
  }

  next();
};
