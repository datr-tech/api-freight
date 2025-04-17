import { Types } from 'mongoose';
import { TemplateModel } from '@app/api/models';

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
