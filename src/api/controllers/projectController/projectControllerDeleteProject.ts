import { ProjectModel } from '@app-af/api/models';
import { Types } from 'mongoose';

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
