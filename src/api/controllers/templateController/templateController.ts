import { templateControllerCreateTemplate } from './templateControllerCreateTemplate';
import { templateControllerDeleteTemplate } from './templateControllerDeleteTemplate';
import { templateControllerReadTemplate } from './templateControllerReadTemplate';
import { templateControllerUpdateTemplate } from './templateControllerUpdateTemplate';

export const templateController = {
  createTemplate: templateControllerCreateTemplate,
  updateTemplate: templateControllerUpdateTemplate,
  readTemplate: templateControllerReadTemplate,
  deleteTemplate: templateControllerDeleteTemplate,
};
