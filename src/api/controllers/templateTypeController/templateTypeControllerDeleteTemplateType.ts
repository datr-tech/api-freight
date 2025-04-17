import { Types } from 'mongoose';
import { TemplateTypeModel } from '@app/api/models';

export const templateTypeControllerDeleteTemplateType = async ({ templateTypeId }) => {
  const res = await TemplateTypeModel.findOneAndUpdate(
    {
      _id: templateTypeId,
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
