import { ITemplateControllerUpdateTemplateInput } from './ITemplateControllerUpdateTemplateInput';
import { ITemplateControllerUpdateTemplateOutput } from './ITemplateControllerUpdateTemplateOutput';

export interface ITemplateControllerUpdateTemplate {
  (
    args: ITemplateControllerUpdateTemplateInput,
  ): Promise<ITemplateControllerUpdateTemplateOutput>;
}
