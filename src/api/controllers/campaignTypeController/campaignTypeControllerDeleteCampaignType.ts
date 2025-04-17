import { Types } from 'mongoose';
import { CampaignTypeModel } from '@app/api/models';

export const campaignTypeControllerDeleteCampaignType = async ({ campaignTypeId }) => {
  const res = await CampaignTypeModel.findOneAndUpdate(
    {
      _id: campaignTypeId,
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
