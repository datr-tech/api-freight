import { TemplateModel } from '@app-af/api/models';
import { Types } from 'mongoose';

export const templateControllerDeleteTemplate = async ({ templateId }) => {
  const res = await TemplateModel.findOneAndUpdate(
    {
      _id: templateId,
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
