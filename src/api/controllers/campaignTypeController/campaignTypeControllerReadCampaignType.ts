import { CampaignTypeModel } from '@app-af/api/models';
import { baseStat } from '@app-af/api/util/baseStat';
import {
  ICampaignTypeControllerReadCampaignType,
  ICampaignTypeControllerReadCampaignTypeOutputError,
  ICampaignTypeControllerReadCampaignTypeOutputSuccess,
} from '@app-af/interfaces/api/controllers';

/**
 * campaignTypeControllerReadCampaignType
 *
 * The freight API read campaignType controller.
 *
 * @param { ICampaignTypeControllerReadCampaignTypeInput } params
 * @param { Types.ObjectId } params.campaignTypeId
 *
 * @returns { Promise<ICampaignTypeControllerReadCampaignTypeOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { campaignTypeModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const campaignTypeControllerReadCampaignType: ICampaignTypeControllerReadCampaignType =
  async ({ campaignTypeId }) => {
    const stat = { ...baseStat };

    try {
      const campaignTypeModel = await CampaignTypeModel.findById(campaignTypeId);

      stat.error = false;
      stat.payload = { campaignTypeModel };
      return stat as ICampaignTypeControllerReadCampaignTypeOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as ICampaignTypeControllerReadCampaignTypeOutputError;
    }
  };
