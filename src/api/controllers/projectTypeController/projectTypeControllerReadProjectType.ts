import { ProjectTypeModel } from '@app/api/models';

export const projectTypeControllerReadProjectType = async ({ projectTypeId }) => {
  const projectType = await ProjectTypeModel.findById(projectTypeId);

  return projectType;
};
