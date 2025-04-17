import { ProjectModel } from '@app/api/models';

export const projectControllerReadProject = async ({ projectId }) => {
  const project = await ProjectModel.findById(projectId);

  return project;
};
