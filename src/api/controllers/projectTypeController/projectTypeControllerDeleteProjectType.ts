import { ProjectTypeModel } from '@app-af/api/models';
import { Types } from 'mongoose';

export const projectTypeControllerDeleteProjectType = async ({ projectTypeId }) => {
  const res = await ProjectTypeModel.findOneAndUpdate(
    {
      _id: projectTypeId,
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
