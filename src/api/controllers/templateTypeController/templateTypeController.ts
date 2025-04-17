import { templateTypeControllerCreateTemplateType } from './templateTypeControllerCreateTemplateType';
import { templateTypeControllerUpdateTemplateType } from './templateTypeControllerUpdateTemplateType';
import { templateTypeControllerReadTemplateType } from './templateTypeControllerReadTemplateType';
import { templateTypeControllerDeleteTemplateType } from './templateTypeControllerDeleteTemplateType';

export const templateTypeController = {
  createTemplateType: templateTypeControllerCreateTemplateType,
  updateTemplateType: templateTypeControllerUpdateTemplateType,
  readTemplateType: templateTypeControllerReadTemplateType,
  deleteTemplateType: templateTypeControllerDeleteTemplateType,
};
