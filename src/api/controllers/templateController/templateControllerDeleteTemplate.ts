import { Types } from 'mongoose';
import { TemplateModel } from '@app/api/models';

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
