import { ITemplateControllerReadTemplateOutputError } from './ITemplateControllerReadTemplateOutputError';
import { ITemplateControllerReadTemplateOutputSuccess } from './ITemplateControllerReadTemplateOutputSuccess';

export type ITemplateControllerReadTemplateOutput =
  | ITemplateControllerReadTemplateOutputSuccess
  | ITemplateControllerReadTemplateOutputError;
