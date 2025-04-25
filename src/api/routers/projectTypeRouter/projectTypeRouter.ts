import { options } from '@datr.tech/leith-config-api-router-options';
import { Router } from 'express';
import { projectTypeRouterCreateProjectType } from './projectTypeRouterCreateProjectType';
import { projectTypeRouterDeleteProjectType } from './projectTypeRouterDeleteProjectType';
import { projectTypeRouterReadProjectType } from './projectTypeRouterReadProjectType';
import { projectTypeRouterUpdateProjectType } from './projectTypeRouterUpdateProjectType';

export const projectTypeRouter = Router(options)
  .use('/', projectTypeRouterCreateProjectType)
  .use('/:projectTypeId', projectTypeRouterDeleteProjectType)
  .use('/:projectTypeId', projectTypeRouterReadProjectType)
  .use('/:projectTypeId', projectTypeRouterUpdateProjectType);
