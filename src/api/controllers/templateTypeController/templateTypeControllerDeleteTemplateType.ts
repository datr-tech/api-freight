import { TemplateTypeModel } from '@app-af/api/models';
import { baseStat } from '@app-af/api/util/baseStat';
import {
  ITemplateTypeControllerDeleteTemplateType,
  ITemplateTypeControllerDeleteTemplateTypeOutputError,
  ITemplateTypeControllerDeleteTemplateTypeOutputSuccess,
} from '@app-af/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * templateTypeControllerDeleteTemplateType
 *
 * The freight API delete templateType controller.
 *
 * @param { ITemplateTypeControllerDeleteTemplateTypeInput } params
 * @param { Types.ObjectId } params.templateTypeId
 *
 * @returns { Promise<ITemplateTypeControllerDeleteTemplateTypeOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { templateTypeModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const templateTypeControllerDeleteTemplateType: ITemplateTypeControllerDeleteTemplateType =
  async ({ templateTypeId }) => {
    const stat = { ...baseStat };

    try {
      await TemplateTypeModel.findOneAndUpdate(
        {
          _id: templateTypeId,
        },
        {
          adminStatusId: new Types.ObjectId(),
        },
        {
          includeResultMetadata: true,
        },
      );

      stat.error = false;
      stat.payload = { templateTypeId };
      return stat as ITemplateTypeControllerDeleteTemplateTypeOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as ITemplateTypeControllerDeleteTemplateTypeOutputError;
    }
  };
