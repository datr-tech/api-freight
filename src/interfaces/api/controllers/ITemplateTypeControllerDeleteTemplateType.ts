import { ITemplateTypeControllerDeleteTemplateTypeInput } from './ITemplateTypeControllerDeleteTemplateTypeInput';
import { ITemplateTypeControllerDeleteTemplateTypeOutput } from './ITemplateTypeControllerDeleteTemplateTypeOutput';

export interface ITemplateTypeControllerDeleteTemplateType {
  (
    args: ITemplateTypeControllerDeleteTemplateTypeInput,
  ): Promise<ITemplateTypeControllerDeleteTemplateTypeOutput>;
}
