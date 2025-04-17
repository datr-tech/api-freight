import { projectTypeControllerCreateProjectType } from './projectTypeControllerCreateProjectType';
import { projectTypeControllerUpdateProjectType } from './projectTypeControllerUpdateProjectType';
import { projectTypeControllerReadProjectType } from './projectTypeControllerReadProjectType';
import { projectTypeControllerDeleteProjectType } from './projectTypeControllerDeleteProjectType';

export const projectTypeController = {
  createProjectType: projectTypeControllerCreateProjectType,
  updateProjectType: projectTypeControllerUpdateProjectType,
  readProjectType: projectTypeControllerReadProjectType,
  deleteProjectType: projectTypeControllerDeleteProjectType,
};
