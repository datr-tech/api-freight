import { Types } from 'mongoose';
import { CampaignModel } from '@app/api/models';

export const campaignControllerCreateCampaign = async ({
  campaignTypeId,
  ownerUserId,
  projectId,
  description,
  name,
  adminStatusId,
  adminUserId,
}) => {
  const campaignId = new Types.ObjectId();
  const modelParams = {
    campaignId,
    campaignTypeId,
    ownerUserId,
    projectId,
    description,
    name,
    adminStatusId,
    adminUserId,
  };

  const campaignModel = new CampaignModel(modelParams);
  await campaignModel.save();

  return campaignModel._id;
};
