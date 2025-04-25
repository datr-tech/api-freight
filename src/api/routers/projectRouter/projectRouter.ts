import { Router } from 'express';
import { options } from '@datr.tech/leith-config-api-router-options';
import { projectRouterCreateProject } from './projectRouterCreateProject';
import { projectRouterDeleteProject } from './projectRouterDeleteProject';
import { projectRouterReadProject } from './projectRouterReadProject';
import { projectRouterUpdateProject } from './projectRouterUpdateProject';

export const projectRouter = Router(options)
  .use('/', projectRouterCreateProject)
  .use('/:projectId', projectRouterDeleteProject)
  .use('/:projectId', projectRouterReadProject)
  .use('/:projectId', projectRouterUpdateProject);
