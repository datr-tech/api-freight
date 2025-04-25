import { TemplateTypeModel } from '@app-af/api/models';
import { Types } from 'mongoose';

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
