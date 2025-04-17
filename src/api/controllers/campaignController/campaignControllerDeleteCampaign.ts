import { Types } from 'mongoose';
import { CampaignModel } from '@app/api/models';

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
