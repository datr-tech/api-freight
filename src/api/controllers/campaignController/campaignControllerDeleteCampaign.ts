import { CampaignModel } from '@app-af/api/models';
import { Types } from 'mongoose';

export const campaignControllerDeleteCampaign = async ({ campaignId }) => {
  const res = await CampaignModel.findOneAndUpdate(
    {
      _id: campaignId,
    },
    {
      adminStatusId: new Types.ObjectId(),
    },
    {
      includeResultMetadata: true,
    },
  );

  return res;
};
