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
 * @returns { Promise<ITemplateTypeControllerUpdateTemplateTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<ITemplateTypeControllerUpdateTemplateTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { templateTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const templateTypeControllerUpdateTemplateType: ITemplateTypeControllerUpdateTemplateType =
  async ({ templateTypeId, payload }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'TemplateTypeModel'
       * using the received 'templateTypeId' param.
       * When successful, update the found model using
       * the key value pairs (or fields) from within the
       * 'payload' param.
       */
      await TemplateTypeModel.findOneAndUpdate(
        {
          _id: templateTypeId,
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
        templateTypeId,
        responseStatusCode: 200,
      };

      /*
       * Cast the response object to 'ITemplateTypeControllerUpdateTemplateTypeOutputSuccess',
       * where the casting interface is a component of the binary union type
       * 'ITemplateTypeControllerUpdateTemplateTypeOutput'.
       */
      return stat as ITemplateTypeControllerUpdateTemplateTypeOutputSuccess;
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
       * Cast the response object to 'ITemplateTypeControllerUpdateTemplateTypeOutputError',
       */
      return stat as ITemplateTypeControllerUpdateTemplateTypeOutputError;
    }
  };
