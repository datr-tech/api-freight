import { ITemplateControllerUpdateTemplateOutputError } from './ITemplateControllerUpdateTemplateOutputError';
import { ITemplateControllerUpdateTemplateOutputSuccess } from './ITemplateControllerUpdateTemplateOutputSuccess';

export type ITemplateControllerUpdateTemplateOutput =
  | ITemplateControllerUpdateTemplateOutputSuccess
  | ITemplateControllerUpdateTemplateOutputError;
