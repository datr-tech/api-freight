import { Types } from 'mongoose';
import { ProjectModel } from '@app/api/models';

export const projectControllerCreateProject = async ({
  projectTypeId,
  organisationId,
  ownerUserId,
  description,
  name,
  adminStatusId,
  adminUserId,
}) => {
  const projectId = new Types.ObjectId();
  const modelParams = {
    projectId,
    projectTypeId,
    organisationId,
    ownerUserId,
    description,
    name,
    adminStatusId,
    adminUserId,
  };

  const projectModel = new ProjectModel(modelParams);
  await projectModel.save();

  return projectModel._id;
};
