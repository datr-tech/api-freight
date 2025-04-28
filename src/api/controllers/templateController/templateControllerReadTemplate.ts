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
 * @returns { Promise<ITemplateControllerReadTemplateOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<ITemplateControllerReadTemplateOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { templateModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const templateControllerReadTemplate: ITemplateControllerReadTemplate = async ({
  templateId,
}) => {
  const stat = { ...baseStat };

  try {
    /*
     * Attempt to find an instance of 'TemplateModel'
     * using the received 'templateId' param.
     */
    const templateModel = await TemplateModel.findById(templateId);

    /*
     * Use the standard controller response object,
     * 'stat', to return the found model.
     */
    stat.error = false;
    stat.payload = { templateModel };

    /*
     * Cast the response object to
     * 'ITemplateControllerReadTemplateOutputSuccess',
     * where the casting interface is a component of
     * the binary union type 'ITemplateControllerReadTemplateOutput'.
     */
    return stat as ITemplateControllerReadTemplateOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = { message };

    /*
     * Cast the response object to 'ITemplateControllerReadTemplateOutputError',
     */
    return stat as ITemplateControllerReadTemplateOutputError;
  }
};
