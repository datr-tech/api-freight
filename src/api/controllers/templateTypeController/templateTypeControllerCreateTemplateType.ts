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
 * @returns { Promise<ITemplateTypeControllerCreateTemplateTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<ITemplateTypeControllerCreateTemplateTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { templateTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const templateTypeControllerCreateTemplateType: ITemplateTypeControllerCreateTemplateType =
  async ({ description, name, adminStatusId, adminUserId, createdAt, updatedAt }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Populate the local 'modelParams' variable
       * with the received inputs.
       */
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

      /*
       * Use the populated 'modelParams' variable
       * to create a new instance of 'TemplateTypeModel'.
       * 'db-freight'. Then save the created
       * model to the associated store: 'db-freight',
       */
      const templateTypeModel = new TemplateTypeModel(modelParams);
      await templateTypeModel.save();

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model's primary key.
       */
      stat.error = false;
      stat.payload = { templateTypeId };

      /*
       * Cast the response object to
       * 'ITemplateTypeControllerCreateTemplateTypeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'ITemplateTypeControllerCreateTemplateTypeOutput'.
       */
      return stat as ITemplateTypeControllerCreateTemplateTypeOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'ITemplateTypeControllerCreateTemplateTypeOutputError',
       */
      return stat as ITemplateTypeControllerCreateTemplateTypeOutputError;
    }
  };
