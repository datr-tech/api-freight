import { CampaignTypeModel } from '@app-af/api/models';

export const modelValidatorCampaignTypeId = async (doc, next) => {
  let campaignType;
  let campaignTypeId;

  if (doc && typeof doc.campaignTypeId !== 'undefined') {
    campaignTypeId = doc.campaignTypeId;
  }

  if (campaignTypeId) {
    campaignType = await CampaignTypeModel.findById(campaignTypeId);
  }

  if (!campaignType) {
    throw new Error('campaignTypeId: invalid');
  }

  next();
};
