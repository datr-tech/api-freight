import { projectTypeControllerCreateProjectType } from './projectTypeControllerCreateProjectType';
import { projectTypeControllerDeleteProjectType } from './projectTypeControllerDeleteProjectType';
import { projectTypeControllerReadProjectType } from './projectTypeControllerReadProjectType';
import { projectTypeControllerUpdateProjectType } from './projectTypeControllerUpdateProjectType';

export const projectTypeController = {
  createProjectType: projectTypeControllerCreateProjectType,
  updateProjectType: projectTypeControllerUpdateProjectType,
  readProjectType: projectTypeControllerReadProjectType,
  deleteProjectType: projectTypeControllerDeleteProjectType,
};
