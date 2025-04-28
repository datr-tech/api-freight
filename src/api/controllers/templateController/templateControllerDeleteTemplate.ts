import { TemplateModel } from '@app-af/api/models';
import { baseStat } from '@app-af/api/util/baseStat';
import {
  ITemplateControllerDeleteTemplate,
  ITemplateControllerDeleteTemplateOutputError,
  ITemplateControllerDeleteTemplateOutputSuccess,
} from '@app-af/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * templateControllerDeleteTemplate
 *
 * The freight API delete template controller.
 *
 * @param { ITemplateControllerDeleteTemplateInput } params
 * @param { Types.ObjectId } params.templateId
 *
 * @returns { Promise<ITemplateControllerDeleteTemplateOutput> }
 * @returns { Promise<ITemplateControllerDeleteTemplateOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<ITemplateControllerDeleteTemplateOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { templateModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const templateControllerDeleteTemplate: ITemplateControllerDeleteTemplate =
  async ({ templateId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'TemplateModel'
       * using the received 'templateId' param.
       * When successful, perform a "soft delete" upon the
       * found model by updating the value of the model's
       * 'adminStatusId' field.
       */
      const templateModel = await TemplateModel.findOneAndUpdate(
        {
          _id: templateId,
        },
        {
          adminStatusId: new Types.ObjectId(),
        },
        {
          includeResultMetadata: true,
        },
      );

      /*
       * Use the standard controller response object,
       * 'stat', to return the primary key of the
       * "soft deleted" model.
       */
      stat.error = false;
      stat.payload = { templateId };

      /*
       * Cast the response object to
       * 'ITemplateControllerDeleteTemplateOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'ITemplateControllerDeleteTemplateOutput'.
       */
      return stat as ITemplateControllerDeleteTemplateOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'ITemplateControllerDeleteTemplateOutputError',
       */
      return stat as ITemplateControllerDeleteTemplateOutputError;
    }
  };
