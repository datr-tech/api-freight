import { CampaignTypeModel } from '@app-af/api/models';
import { baseStat } from '@app-af/api/util/baseStat';
import {
  ICampaignTypeControllerUpdateCampaignType,
  ICampaignTypeControllerUpdateCampaignTypeOutputError,
  ICampaignTypeControllerUpdateCampaignTypeOutputSuccess,
} from '@app-af/interfaces/api/controllers';

/**
 * campaignTypeControllerUpdateCampaignType
 *
 * The freight API update campaignType controller.
 *
 * @param { ICampaignTypeControllerUpdateCampaignTypeInput } params
 * @param { Types.ObjectId } params.campaignTypeId
 * @param { string } params.payload.description  (Optional)
 * @param { string } params.payload.name  (Optional)
 * @param { Types.ObjectId } params.payload.adminStatusId  (Optional)
 * @param { Types.ObjectId } params.payload.adminUserId  (Optional)
 * @param { number } params.payload.createdAt  (Optional)
 * @param { number } params.payload.updatedAt  (Optional)
 *
 * @returns { Promise<ICampaignTypeControllerUpdateCampaignTypeOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { campaignTypeModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const campaignTypeControllerUpdateCampaignType: ICampaignTypeControllerUpdateCampaignType =
  async ({ campaignTypeId, payload }) => {
    const stat = { ...baseStat };

    try {
      await CampaignTypeModel.findOneAndUpdate(
        {
          _id: campaignTypeId,
        },
        payload,
        {
          includeResultMetadata: true,
        },
      );

      stat.error = false;
      stat.payload = { campaignTypeId };
      return stat as ICampaignTypeControllerUpdateCampaignTypeOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as ICampaignTypeControllerUpdateCampaignTypeOutputError;
    }
  };
