import { CampaignTypeModel } from '@app/api/models';

export const campaignTypeControllerReadCampaignType = async ({ campaignTypeId }) => {
  const campaignType = await CampaignTypeModel.findById(campaignTypeId);

  return campaignType;
};
