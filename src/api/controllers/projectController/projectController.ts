import { projectControllerCreateProject } from './projectControllerCreateProject';
import { projectControllerDeleteProject } from './projectControllerDeleteProject';
import { projectControllerReadProject } from './projectControllerReadProject';
import { projectControllerUpdateProject } from './projectControllerUpdateProject';

export const projectController = {
  createProject: projectControllerCreateProject,
  updateProject: projectControllerUpdateProject,
  readProject: projectControllerReadProject,
  deleteProject: projectControllerDeleteProject,
};
