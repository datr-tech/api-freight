import { ProjectModel } from '@app-af/api/models';

export const projectControllerReadProject = async ({ projectId }) => {
  const project = await ProjectModel.findById(projectId);

  return project;
};
