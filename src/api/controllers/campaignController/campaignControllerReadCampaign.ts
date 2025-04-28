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
 *
 * @example On succcess returns: Promise<{ error: false, payload: { campaignModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const campaignControllerReadCampaign: ICampaignControllerReadCampaign = async ({
  campaignId,
}) => {
  const stat = { ...baseStat };

  try {
    const campaignModel = await CampaignModel.findById(campaignId);

    stat.error = false;
    stat.payload = { campaignModel };
    return stat as ICampaignControllerReadCampaignOutputSuccess;
  } catch (error) {
    const { message } = error;
    stat.payload = { message };
    return stat as ICampaignControllerReadCampaignOutputError;
  }
};
