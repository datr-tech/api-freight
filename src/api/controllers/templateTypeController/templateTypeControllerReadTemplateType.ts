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
 * @returns { Promise<ITemplateTypeControllerReadTemplateTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<ITemplateTypeControllerReadTemplateTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { templateTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const templateTypeControllerReadTemplateType: ITemplateTypeControllerReadTemplateType =
  async ({ templateTypeId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'TemplateTypeModel'
       * using the received 'templateTypeId' param.
       */
      const templateTypeModel = await TemplateTypeModel.findById(templateTypeId);

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model.
       */
      stat.error = false;
      stat.payload = {
        templateTypeModel,
        responseStatusCode: 200,
      };

      /*
       * Cast the response object to
       * 'ITemplateTypeControllerReadTemplateTypeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'ITemplateTypeControllerReadTemplateTypeOutput'.
       */
      return stat as ITemplateTypeControllerReadTemplateTypeOutputSuccess;
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
       * Cast the response object to 'ITemplateTypeControllerReadTemplateTypeOutputError',
       */
      return stat as ITemplateTypeControllerReadTemplateTypeOutputError;
    }
  };
