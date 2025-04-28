import { CampaignModel } from '@app-af/api/models';
import { baseStat } from '@app-af/api/util/baseStat';
import {
  ICampaignControllerDeleteCampaign,
  ICampaignControllerDeleteCampaignOutputError,
  ICampaignControllerDeleteCampaignOutputSuccess,
} from '@app-af/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * campaignControllerDeleteCampaign
 *
 * The freight API delete campaign controller.
 *
 * @param { ICampaignControllerDeleteCampaignInput } params
 * @param { Types.ObjectId } params.campaignId
 *
 * @returns { Promise<ICampaignControllerDeleteCampaignOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { campaignModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const campaignControllerDeleteCampaign: ICampaignControllerDeleteCampaign =
  async ({ campaignId }) => {
    const stat = { ...baseStat };

    try {
      await CampaignModel.findOneAndUpdate(
        {
          _id: campaignId,
        },
        {
          adminStatusId: new Types.ObjectId(),
        },
        {
          includeResultMetadata: true,
        },
      );

      stat.error = false;
      stat.payload = { campaignId };
      return stat as ICampaignControllerDeleteCampaignOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as ICampaignControllerDeleteCampaignOutputError;
    }
  };
