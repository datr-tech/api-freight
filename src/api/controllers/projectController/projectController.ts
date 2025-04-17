import { projectControllerCreateProject } from './projectControllerCreateProject';
import { projectControllerUpdateProject } from './projectControllerUpdateProject';
import { projectControllerReadProject } from './projectControllerReadProject';
import { projectControllerDeleteProject } from './projectControllerDeleteProject';

export const projectController = {
  createProject: projectControllerCreateProject,
  updateProject: projectControllerUpdateProject,
  readProject: projectControllerReadProject,
  deleteProject: projectControllerDeleteProject,
};
