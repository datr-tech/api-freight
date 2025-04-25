import { CampaignTypeModel } from '@app-af/api/models';
import { Types } from 'mongoose';

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
