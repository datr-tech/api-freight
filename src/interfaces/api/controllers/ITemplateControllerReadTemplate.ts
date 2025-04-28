import { ITemplateControllerReadTemplateInput } from './ITemplateControllerReadTemplateInput';
import { ITemplateControllerReadTemplateOutput } from './ITemplateControllerReadTemplateOutput';

export interface ITemplateControllerReadTemplate {
  (
    args: ITemplateControllerReadTemplateInput,
  ): Promise<ITemplateControllerReadTemplateOutput>;
}
