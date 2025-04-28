import { ITemplateControllerDeleteTemplateInput } from './ITemplateControllerDeleteTemplateInput';
import { ITemplateControllerDeleteTemplateOutput } from './ITemplateControllerDeleteTemplateOutput';

export interface ITemplateControllerDeleteTemplate {
  (
    args: ITemplateControllerDeleteTemplateInput,
  ): Promise<ITemplateControllerDeleteTemplateOutput>;
}
