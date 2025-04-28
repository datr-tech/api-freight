import { TemplateModel } from '@app-af/api/models';
import { baseStat } from '@app-af/api/util/baseStat';
import {
  ITemplateControllerReadTemplate,
  ITemplateControllerReadTemplateOutputError,
  ITemplateControllerReadTemplateOutputSuccess,
} from '@app-af/interfaces/api/controllers';

/**
 * templateControllerReadTemplate
 *
 * The freight API read template controller.
 *
 * @param { ITemplateControllerReadTemplateInput } params
 * @param { Types.ObjectId } params.templateId
 *
 * @returns { Promise<ITemplateControllerReadTemplateOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { templateModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const templateControllerReadTemplate: ITemplateControllerReadTemplate = async ({
  templateId,
}) => {
  const stat = { ...baseStat };

  try {
    const templateModel = await TemplateModel.findById(templateId);

    stat.error = false;
    stat.payload = { templateModel };
    return stat as ITemplateControllerReadTemplateOutputSuccess;
  } catch (error) {
    const { message } = error;
    stat.payload = { message };
    return stat as ITemplateControllerReadTemplateOutputError;
  }
};
