import { ITemplateTypeControllerUpdateTemplateTypeInput } from './ITemplateTypeControllerUpdateTemplateTypeInput';
import { ITemplateTypeControllerUpdateTemplateTypeOutput } from './ITemplateTypeControllerUpdateTemplateTypeOutput';

export interface ITemplateTypeControllerUpdateTemplateType {
  (
    args: ITemplateTypeControllerUpdateTemplateTypeInput,
  ): Promise<ITemplateTypeControllerUpdateTemplateTypeOutput>;
}
