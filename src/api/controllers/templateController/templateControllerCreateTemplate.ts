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
 * @returns { Promise<ITemplateControllerCreateTemplateOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<ITemplateControllerCreateTemplateOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { templateModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
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
      /*
       * Populate the local 'modelParams' variable
       * with the received inputs.
       */
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

      /*
       * Use the populated 'modelParams' variable
       * to create a new instance of 'TemplateModel'.
       * 'db-freight'.
       */
      const templateModel = new TemplateModel(modelParams);

      /*
       * The save the created model to the associated store: 'db-freight',
       */
      await templateModel.save();

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model.
       */
      stat.error = false;
      stat.payload = { templateId: templateModel.id };

      /*
       * Cast the response object to
       * 'ITemplateControllerCreateTemplateOutputSuccess',
       * where the casting interface is a component of
       * the binary union type
       * 'ITemplateControllerCreateTemplateOutput'.
       */
      return stat as ITemplateControllerCreateTemplateOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'ITemplateControllerCreateTemplateOutputError',
       */
      return stat as ITemplateControllerCreateTemplateOutputError;
    }
  };
