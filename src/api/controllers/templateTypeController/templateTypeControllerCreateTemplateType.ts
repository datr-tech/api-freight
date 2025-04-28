import { TemplateTypeModel } from '@app-af/api/models';
import { baseStat } from '@app-af/api/util/baseStat';
import {
  ITemplateTypeControllerCreateTemplateType,
  ITemplateTypeControllerCreateTemplateTypeOutputError,
  ITemplateTypeControllerCreateTemplateTypeOutputSuccess,
} from '@app-af/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * templateTypeControllerCreateTemplateType
 *
 * The freight API create templateType controller.
 *
 * @param { ITemplateTypeControllerCreateTemplateTypeInput } params
 * @param { Types.ObjectId } params.templateTypeId
 * @param { string } params.description  (Optional)
 * @param { string } params.name
 * @param { Types.ObjectId } params.adminStatusId
 * @param { Types.ObjectId } params.adminUserId
 * @param { number } params.createdAt  (Optional)
 * @param { number } params.updatedAt
 *
 * @returns { Promise<ITemplateTypeControllerCreateTemplateTypeOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { templateTypeModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const templateTypeControllerCreateTemplateType: ITemplateTypeControllerCreateTemplateType =
  async ({ description, name, adminStatusId, adminUserId, createdAt, updatedAt }) => {
    const stat = { ...baseStat };

    try {
      const templateTypeId = new Types.ObjectId();
      const modelParams = {
        templateTypeId,
        description,
        name,
        adminStatusId,
        adminUserId,
        createdAt,
        updatedAt,
      };

      const templateTypeModel = new TemplateTypeModel(modelParams);
      await templateTypeModel.save();

      stat.error = false;
      stat.payload = { templateTypeId };
      return stat as ITemplateTypeControllerCreateTemplateTypeOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as ITemplateTypeControllerCreateTemplateTypeOutputError;
    }
  };
