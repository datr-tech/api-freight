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
 *
 * @example On succcess returns: Promise<{ error: false, payload: { templateModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const templateControllerUpdateTemplate: ITemplateControllerUpdateTemplate =
  async ({ templateId, payload }) => {
    const stat = { ...baseStat };

    try {
      await TemplateModel.findOneAndUpdate(
        {
          _id: templateId,
        },
        payload,
        {
          includeResultMetadata: true,
        },
      );

      stat.error = false;
      stat.payload = { templateId };
      return stat as ITemplateControllerUpdateTemplateOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as ITemplateControllerUpdateTemplateOutputError;
    }
  };
