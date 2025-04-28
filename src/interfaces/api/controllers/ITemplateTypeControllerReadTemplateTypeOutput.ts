import { ITemplateTypeControllerReadTemplateTypeOutputError } from './ITemplateTypeControllerReadTemplateTypeOutputError';
import { ITemplateTypeControllerReadTemplateTypeOutputSuccess } from './ITemplateTypeControllerReadTemplateTypeOutputSuccess';

export type ITemplateTypeControllerReadTemplateTypeOutput =
  | ITemplateTypeControllerReadTemplateTypeOutputSuccess
  | ITemplateTypeControllerReadTemplateTypeOutputError;
