import { ITemplateControllerCreateTemplateInput } from './ITemplateControllerCreateTemplateInput';
import { ITemplateControllerCreateTemplateOutput } from './ITemplateControllerCreateTemplateOutput';

export interface ITemplateControllerCreateTemplate {
  (
    args: ITemplateControllerCreateTemplateInput,
  ): Promise<ITemplateControllerCreateTemplateOutput>;
}
