import { TemplateModel } from '@app-af/api/models';
import { baseStat } from '@app-af/api/util/baseStat';
import {
  ITemplateControllerUpdateTemplate,
  ITemplateControllerUpdateTemplateOutputError,
  ITemplateControllerUpdateTemplateOutputSuccess,
} from '@app-af/interfaces/api/controllers';

/**
 * templateControllerUpdateTemplate
 *
 * The freight API update template controller.
 *
 * @param { ITemplateControllerUpdateTemplateInput } params
 * @param { Types.ObjectId } params.templateId
 * @param { Types.ObjectId } params.payload.campaignId  (Optional)
 * @param { Types.ObjectId } params.payload.templateTypeId  (Optional)
 * @param { Types.ObjectId } params.payload.ownerUserId  (Optional)
 * @param { string } params.payload.description  (Optional)
 * @param { string } params.payload.name  (Optional)
 * @param { Types.ObjectId } params.payload.adminStatusId  (Optional)
 * @param { Types.ObjectId } params.payload.adminUserId  (Optional)
 * @param { number } params.payload.createdAt  (Optional)
 * @param { number } params.payload.updatedAt  (Optional)
 *
 * @returns { Promise<ITemplateControllerUpdateTemplateOutput> }
 * @returns { Promise<ITemplateControllerUpdateTemplateOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<ITemplateControllerUpdateTemplateOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { templateModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const templateControllerUpdateTemplate: ITemplateControllerUpdateTemplate =
  async ({ templateId, payload }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'TemplateModel'
       * using the received 'templateId' param.
       * When successful, update the found model using
       * the key value pairs (or fields) from within the
       * 'payload' param.
       */
      await TemplateModel.findOneAndUpdate(
        {
          _id: templateId,
        },
        payload,
        {
          includeResultMetadata: true,
        },
      );

      /*
       * Use the standard controller response object,
       * 'stat', to return the updated model's primary key.
       */
      stat.error = false;
      stat.payload = {
        templateId,
        responseStatusCode: 200,
      };

      /*
       * Cast the response object to 'ITemplateControllerUpdateTemplateOutputSuccess',
       * where the casting interface is a component of the binary union type
       * 'ITemplateControllerUpdateTemplateOutput'.
       */
      return stat as ITemplateControllerUpdateTemplateOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = {
        message,
        responseStatusCode: 404,
      };

      /*
       * Cast the response object to 'ITemplateControllerUpdateTemplateOutputError',
       */
      return stat as ITemplateControllerUpdateTemplateOutputError;
    }
  };
