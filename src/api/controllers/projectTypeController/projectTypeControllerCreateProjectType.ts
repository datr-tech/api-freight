import { Types } from 'mongoose';
import { ProjectTypeModel } from '@app/api/models';

export const projectTypeControllerCreateProjectType = async ({ description, name, adminStatusId, adminUserId }) => {
  const projectTypeId = new Types.ObjectId();
  const modelParams = {
    projectTypeId,
    description,
    name,
    adminStatusId,
    adminUserId,
  };

  const projectTypeModel = new ProjectTypeModel(modelParams);
  await projectTypeModel.save();

  return projectTypeModel._id;
};
