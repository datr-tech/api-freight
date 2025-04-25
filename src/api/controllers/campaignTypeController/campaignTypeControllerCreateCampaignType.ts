import { CampaignTypeModel } from '@app-af/api/models';
import { Types } from 'mongoose';

export const campaignTypeControllerCreateCampaignType = async ({
  description,
  name,
  adminStatusId,
  adminUserId,
}) => {
  const campaignTypeId = new Types.ObjectId();
  const modelParams = {
    campaignTypeId,
    description,
    name,
    adminStatusId,
    adminUserId,
  };

  const campaignTypeModel = new CampaignTypeModel(modelParams);
  await campaignTypeModel.save();

  return campaignTypeModel._id;
};
