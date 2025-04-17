import { Types } from 'mongoose';
import { CampaignTypeModel } from '@app/api/models';

export const campaignTypeControllerCreateCampaignType = async ({ description, name, adminStatusId, adminUserId }) => {
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
