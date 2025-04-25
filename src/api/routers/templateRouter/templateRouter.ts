import { options } from '@datr.tech/leith-config-api-router-options';
import { Router } from 'express';
import { templateRouterCreateTemplate } from './templateRouterCreateTemplate';
import { templateRouterDeleteTemplate } from './templateRouterDeleteTemplate';
import { templateRouterReadTemplate } from './templateRouterReadTemplate';
import { templateRouterUpdateTemplate } from './templateRouterUpdateTemplate';

export const templateRouter = Router(options)
  .use('/', templateRouterCreateTemplate)
  .use('/:templateId', templateRouterDeleteTemplate)
  .use('/:templateId', templateRouterReadTemplate)
  .use('/:templateId', templateRouterUpdateTemplate);
