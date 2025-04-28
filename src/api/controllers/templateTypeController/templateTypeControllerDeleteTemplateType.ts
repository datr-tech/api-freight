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
 * @returns { Promise<ITemplateTypeControllerDeleteTemplateTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<ITemplateTypeControllerDeleteTemplateTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { templateTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const templateTypeControllerDeleteTemplateType: ITemplateTypeControllerDeleteTemplateType =
  async ({ templateTypeId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'TemplateTypeModel'
       * using the received 'templateTypeId' param.
       * When successful, perform a "soft delete" upon the
       * found model by updating the value of the model's
       * 'adminStatusId' field.
       */
      const templateTypeModel = await TemplateTypeModel.findOneAndUpdate(
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

      /*
       * Use the standard controller response object,
       * 'stat', to return the primary key of the
       * "soft deleted" model.
       */
      stat.error = false;
      stat.payload = { templateTypeId };

      /*
       * Cast the response object to
       * 'ITemplateTypeControllerDeleteTemplateTypeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'ITemplateTypeControllerDeleteTemplateTypeOutput'.
       */
      return stat as ITemplateTypeControllerDeleteTemplateTypeOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'ITemplateTypeControllerDeleteTemplateTypeOutputError',
       */
      return stat as ITemplateTypeControllerDeleteTemplateTypeOutputError;
    }
  };
