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
 *
 * @example On succcess returns: Promise<{ error: false, payload: { templateModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const templateControllerDeleteTemplate: ITemplateControllerDeleteTemplate =
  async ({ templateId }) => {
    const stat = { ...baseStat };

    try {
      await TemplateModel.findOneAndUpdate(
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

      stat.error = false;
      stat.payload = { templateId };
      return stat as ITemplateControllerDeleteTemplateOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as ITemplateControllerDeleteTemplateOutputError;
    }
  };
