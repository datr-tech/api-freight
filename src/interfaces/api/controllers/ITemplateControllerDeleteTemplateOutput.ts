import { ITemplateControllerDeleteTemplateOutputError } from './ITemplateControllerDeleteTemplateOutputError';
import { ITemplateControllerDeleteTemplateOutputSuccess } from './ITemplateControllerDeleteTemplateOutputSuccess';

export type ITemplateControllerDeleteTemplateOutput =
  | ITemplateControllerDeleteTemplateOutputSuccess
  | ITemplateControllerDeleteTemplateOutputError;
