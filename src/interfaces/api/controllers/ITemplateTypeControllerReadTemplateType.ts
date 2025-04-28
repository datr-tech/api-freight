import { ITemplateTypeControllerReadTemplateTypeInput } from './ITemplateTypeControllerReadTemplateTypeInput';
import { ITemplateTypeControllerReadTemplateTypeOutput } from './ITemplateTypeControllerReadTemplateTypeOutput';

export interface ITemplateTypeControllerReadTemplateType {
  (
    args: ITemplateTypeControllerReadTemplateTypeInput,
  ): Promise<ITemplateTypeControllerReadTemplateTypeOutput>;
}
