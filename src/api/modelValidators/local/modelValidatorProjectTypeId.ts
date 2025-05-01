import { ProjectTypeModel } from '@app-af/api/models';

export const modelValidatorProjectTypeId = async (doc, next) => {
  let projectType;
  let projectTypeId;

  if (doc && typeof doc.projectTypeId !== 'undefined') {
    projectTypeId = doc.projectTypeId;
  }

  if (projectTypeId) {
    projectType = await ProjectTypeModel.findById(projectTypeId);
  }

  if (!projectType) {
    throw new Error('projectTypeId: invalid');
  }

  next();
};
