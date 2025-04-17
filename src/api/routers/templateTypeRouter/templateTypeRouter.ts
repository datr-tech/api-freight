import { Router } from 'express';
import { options } from '@freight/common-router-options';
import { templateTypeRouterCreateTemplateType } from './templateTypeRouterCreateTemplateType';
import { templateTypeRouterDeleteTemplateType } from './templateTypeRouterDeleteTemplateType';
import { templateTypeRouterReadTemplateType } from './templateTypeRouterReadTemplateType';
import { templateTypeRouterUpdateTemplateType } from './templateTypeRouterUpdateTemplateType';

export const templateTypeRouter = Router(options)
  .use('/', templateTypeRouterCreateTemplateType)
  .use('/:templateTypeId', templateTypeRouterDeleteTemplateType)
  .use('/:templateTypeId', templateTypeRouterReadTemplateType)
  .use('/:templateTypeId', templateTypeRouterUpdateTemplateType);
