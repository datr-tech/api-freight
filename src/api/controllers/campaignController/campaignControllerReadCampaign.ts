import { CampaignModel } from '@app-af/api/models';
import { baseStat } from '@app-af/api/util/baseStat';
import {
  ICampaignControllerReadCampaign,
  ICampaignControllerReadCampaignOutputError,
  ICampaignControllerReadCampaignOutputSuccess,
} from '@app-af/interfaces/api/controllers';

/**
 * campaignControllerReadCampaign
 *
 * The freight API read campaign controller.
 *
 * @param { ICampaignControllerReadCampaignInput } params
 * @param { Types.ObjectId } params.campaignId
 *
 * @returns { Promise<ICampaignControllerReadCampaignOutput> }
 * @returns { Promise<ICampaignControllerReadCampaignOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<ICampaignControllerReadCampaignOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { campaignModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const campaignControllerReadCampaign: ICampaignControllerReadCampaign = async ({
  campaignId,
}) => {
  const stat = { ...baseStat };

  try {
    /*
     * Attempt to find an instance of 'CampaignModel'
     * using the received 'campaignId' param.
     */
    const campaignModel = await CampaignModel.findById(campaignId);

    /*
     * Use the standard controller response object,
     * 'stat', to return the found model.
     */
    stat.error = false;
    stat.payload = { campaignModel };

    /*
     * Cast the response object to
     * 'ICampaignControllerReadCampaignOutputSuccess',
     * where the casting interface is a component of
     * the binary union type 'ICampaignControllerReadCampaignOutput'.
     */
    return stat as ICampaignControllerReadCampaignOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = { message };

    /*
     * Cast the response object to 'ICampaignControllerReadCampaignOutputError',
     */
    return stat as ICampaignControllerReadCampaignOutputError;
  }
};
