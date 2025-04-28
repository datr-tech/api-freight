import { ITemplateTypeControllerCreateTemplateTypeInput } from './ITemplateTypeControllerCreateTemplateTypeInput';
import { ITemplateTypeControllerCreateTemplateTypeOutput } from './ITemplateTypeControllerCreateTemplateTypeOutput';

export interface ITemplateTypeControllerCreateTemplateType {
  (
    args: ITemplateTypeControllerCreateTemplateTypeInput,
  ): Promise<ITemplateTypeControllerCreateTemplateTypeOutput>;
}
