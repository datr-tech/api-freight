import { CampaignModel } from '@app-af/api/models';
import { baseStat } from '@app-af/api/util/baseStat';
import {
  ICampaignControllerUpdateCampaign,
  ICampaignControllerUpdateCampaignOutputError,
  ICampaignControllerUpdateCampaignOutputSuccess,
} from '@app-af/interfaces/api/controllers';

/**
 * campaignControllerUpdateCampaign
 *
 * The freight API update campaign controller.
 *
 * @param { ICampaignControllerUpdateCampaignInput } params
 * @param { Types.ObjectId } params.campaignId
 * @param { Types.ObjectId } params.payload.campaignTypeId  (Optional)
 * @param { Types.ObjectId } params.payload.ownerUserId  (Optional)
 * @param { Types.ObjectId } params.payload.projectId  (Optional)
 * @param { string } params.payload.description  (Optional)
 * @param { string } params.payload.name  (Optional)
 * @param { Types.ObjectId } params.payload.adminStatusId  (Optional)
 * @param { Types.ObjectId } params.payload.adminUserId  (Optional)
 * @param { number } params.payload.createdAt  (Optional)
 * @param { number } params.payload.updatedAt  (Optional)
 *
 * @returns { Promise<ICampaignControllerUpdateCampaignOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { campaignModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const campaignControllerUpdateCampaign: ICampaignControllerUpdateCampaign =
  async ({ campaignId, payload }) => {
    const stat = { ...baseStat };

    try {
      await CampaignModel.findOneAndUpdate(
        {
          _id: campaignId,
        },
        payload,
        {
          includeResultMetadata: true,
        },
      );

      stat.error = false;
      stat.payload = { campaignId };
      return stat as ICampaignControllerUpdateCampaignOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as ICampaignControllerUpdateCampaignOutputError;
    }
  };
