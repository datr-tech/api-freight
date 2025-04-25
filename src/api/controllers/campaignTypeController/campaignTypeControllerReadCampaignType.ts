import { CampaignTypeModel } from '@app-af/api/models';

export const campaignTypeControllerReadCampaignType = async ({ campaignTypeId }) => {
  const campaignType = await CampaignTypeModel.findById(campaignTypeId);

  return campaignType;
};
