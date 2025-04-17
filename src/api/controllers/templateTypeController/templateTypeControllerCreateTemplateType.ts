import { Types } from 'mongoose';
import { TemplateTypeModel } from '@app/api/models';

export const templateTypeControllerCreateTemplateType = async ({ description, name, adminStatusId, adminUserId }) => {
  const templateTypeId = new Types.ObjectId();
  const modelParams = {
    templateTypeId,
    description,
    name,
    adminStatusId,
    adminUserId,
  };

  const templateTypeModel = new TemplateTypeModel(modelParams);
  await templateTypeModel.save();

  return templateTypeModel._id;
};
