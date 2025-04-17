import { ProjectModel } from '@app/api/models';

export const modelValidatorProjectId = async (doc, next) => {
  let project;
  let projectId;

  if (doc && typeof doc.projectId !== 'undefined') {
    projectId = doc.projectId;
  }

  if (projectId) {
    project = await ProjectModel.findById(projectId);
  }

  if (!project) {
    throw new Error('projectId: invalid');
  }

  next();
};
