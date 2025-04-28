import { ITemplateControllerCreateTemplateOutputError } from './ITemplateControllerCreateTemplateOutputError';
import { ITemplateControllerCreateTemplateOutputSuccess } from './ITemplateControllerCreateTemplateOutputSuccess';

export type ITemplateControllerCreateTemplateOutput =
  | ITemplateControllerCreateTemplateOutputSuccess
  | ITemplateControllerCreateTemplateOutputError;
