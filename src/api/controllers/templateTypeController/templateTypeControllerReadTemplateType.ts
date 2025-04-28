import { TemplateTypeModel } from '@app-af/api/models';
import { baseStat } from '@app-af/api/util/baseStat';
import {
  ITemplateTypeControllerReadTemplateType,
  ITemplateTypeControllerReadTemplateTypeOutputError,
  ITemplateTypeControllerReadTemplateTypeOutputSuccess,
} from '@app-af/interfaces/api/controllers';

/**
 * templateTypeControllerReadTemplateType
 *
 * The freight API read templateType controller.
 *
 * @param { ITemplateTypeControllerReadTemplateTypeInput } params
 * @param { Types.ObjectId } params.templateTypeId
 *
 * @returns { Promise<ITemplateTypeControllerReadTemplateTypeOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { templateTypeModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const templateTypeControllerReadTemplateType: ITemplateTypeControllerReadTemplateType =
  async ({ templateTypeId }) => {
    const stat = { ...baseStat };

    try {
      const templateTypeModel = await TemplateTypeModel.findById(templateTypeId);

      stat.error = false;
      stat.payload = { templateTypeModel };
      return stat as ITemplateTypeControllerReadTemplateTypeOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as ITemplateTypeControllerReadTemplateTypeOutputError;
    }
  };
