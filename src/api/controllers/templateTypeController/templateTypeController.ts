import { templateTypeControllerCreateTemplateType } from './templateTypeControllerCreateTemplateType';
import { templateTypeControllerDeleteTemplateType } from './templateTypeControllerDeleteTemplateType';
import { templateTypeControllerReadTemplateType } from './templateTypeControllerReadTemplateType';
import { templateTypeControllerUpdateTemplateType } from './templateTypeControllerUpdateTemplateType';

export const templateTypeController = {
  createTemplateType: templateTypeControllerCreateTemplateType,
  updateTemplateType: templateTypeControllerUpdateTemplateType,
  readTemplateType: templateTypeControllerReadTemplateType,
  deleteTemplateType: templateTypeControllerDeleteTemplateType,
};
