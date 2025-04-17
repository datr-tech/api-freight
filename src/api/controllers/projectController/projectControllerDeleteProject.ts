import { Types } from 'mongoose';
import { ProjectModel } from '@app/api/models';

export const projectControllerDeleteProject = async ({ projectId }) => {
  const res = await ProjectModel.findOneAndUpdate(
    {
      _id: projectId,
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
