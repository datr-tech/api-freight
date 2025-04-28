import { TemplateModel } from '@app-af/api/models';
import { baseStat } from '@app-af/api/util/baseStat';
import {
  ITemplateControllerCreateTemplate,
  ITemplateControllerCreateTemplateOutputError,
  ITemplateControllerCreateTemplateOutputSuccess,
} from '@app-af/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * templateControllerCreateTemplate
 *
 * The freight API create template controller.
 *
 * @param { ITemplateControllerCreateTemplateInput } params
 * @param { Types.ObjectId } params.templateId
 * @param { Types.ObjectId } params.campaignId
 * @param { Types.ObjectId } params.templateTypeId
 * @param { Types.ObjectId } params.ownerUserId
 * @param { string } params.description  (Optional)
 * @param { string } params.name
 * @param { Types.ObjectId } params.adminStatusId
 * @param { Types.ObjectId } params.adminUserId
 * @param { number } params.createdAt  (Optional)
 * @param { number } params.updatedAt
 *
 * @returns { Promise<ITemplateControllerCreateTemplateOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { templateModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const templateControllerCreateTemplate: ITemplateControllerCreateTemplate =
  async ({
    campaignId,
    templateTypeId,
    ownerUserId,
    description,
    name,
    adminStatusId,
    adminUserId,
    createdAt,
    updatedAt,
  }) => {
    const stat = { ...baseStat };

    try {
      const templateId = new Types.ObjectId();
      const modelParams = {
        templateId,
        campaignId,
        templateTypeId,
        ownerUserId,
        description,
        name,
        adminStatusId,
        adminUserId,
        createdAt,
        updatedAt,
      };

      const templateModel = new TemplateModel(modelParams);
      await templateModel.save();

      stat.error = false;
      stat.payload = { templateId };
      return stat as ITemplateControllerCreateTemplateOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as ITemplateControllerCreateTemplateOutputError;
    }
  };
