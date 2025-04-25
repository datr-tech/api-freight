import { TemplateModel } from '@app-af/api/models';
import { Types } from 'mongoose';

export const templateControllerCreateTemplate = async ({
  campaignId,
  templateTypeId,
  ownerUserId,
  description,
  name,
  adminStatusId,
  adminUserId,
}) => {
  const templateId = new Types.ObjectId();
  const modelParams = {
    templateId,
    campaignId,
    templateTypeId,
    ownerUserId,
    description,
    name,
    adminStatusId,
    adminUserId,
  };

  const templateModel = new TemplateModel(modelParams);
  await templateModel.save();

  return templateModel._id;
};
