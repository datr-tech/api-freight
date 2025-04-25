import { ProjectTypeModel } from '@app-af/api/models';

export const projectTypeControllerReadProjectType = async ({ projectTypeId }) => {
  const projectType = await ProjectTypeModel.findById(projectTypeId);

  return projectType;
};
