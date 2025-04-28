import { TemplateTypeModel } from '@app-af/api/models';
import { baseStat } from '@app-af/api/util/baseStat';
import {
  ITemplateTypeControllerUpdateTemplateType,
  ITemplateTypeControllerUpdateTemplateTypeOutputError,
  ITemplateTypeControllerUpdateTemplateTypeOutputSuccess,
} from '@app-af/interfaces/api/controllers';

/**
 * templateTypeControllerUpdateTemplateType
 *
 * The freight API update templateType controller.
 *
 * @param { ITemplateTypeControllerUpdateTemplateTypeInput } params
 * @param { Types.ObjectId } params.templateTypeId
 * @param { string } params.payload.description  (Optional)
 * @param { string } params.payload.name  (Optional)
 * @param { Types.ObjectId } params.payload.adminStatusId  (Optional)
 * @param { Types.ObjectId } params.payload.adminUserId  (Optional)
 * @param { number } params.payload.createdAt  (Optional)
 * @param { number } params.payload.updatedAt  (Optional)
 *
 * @returns { Promise<ITemplateTypeControllerUpdateTemplateTypeOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { templateTypeModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const templateTypeControllerUpdateTemplateType: ITemplateTypeControllerUpdateTemplateType =
  async ({ templateTypeId, payload }) => {
    const stat = { ...baseStat };

    try {
      await TemplateTypeModel.findOneAndUpdate(
        {
          _id: templateTypeId,
        },
        payload,
        {
          includeResultMetadata: true,
        },
      );

      stat.error = false;
      stat.payload = { templateTypeId };
      return stat as ITemplateTypeControllerUpdateTemplateTypeOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as ITemplateTypeControllerUpdateTemplateTypeOutputError;
    }
  };
