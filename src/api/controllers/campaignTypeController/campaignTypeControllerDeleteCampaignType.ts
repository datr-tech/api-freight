import { CampaignTypeModel } from '@app-af/api/models';
import { baseStat } from '@app-af/api/util/baseStat';
import {
  ICampaignTypeControllerDeleteCampaignType,
  ICampaignTypeControllerDeleteCampaignTypeOutputError,
  ICampaignTypeControllerDeleteCampaignTypeOutputSuccess,
} from '@app-af/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * campaignTypeControllerDeleteCampaignType
 *
 * The freight API delete campaignType controller.
 *
 * @param { ICampaignTypeControllerDeleteCampaignTypeInput } params
 * @param { Types.ObjectId } params.campaignTypeId
 *
 * @returns { Promise<ICampaignTypeControllerDeleteCampaignTypeOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { campaignTypeModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const campaignTypeControllerDeleteCampaignType: ICampaignTypeControllerDeleteCampaignType =
  async ({ campaignTypeId }) => {
    const stat = { ...baseStat };

    try {
      await CampaignTypeModel.findOneAndUpdate(
        {
          _id: campaignTypeId,
        },
        {
          adminStatusId: new Types.ObjectId(),
        },
        {
          includeResultMetadata: true,
        },
      );

      stat.error = false;
      stat.payload = { campaignTypeId };
      return stat as ICampaignTypeControllerDeleteCampaignTypeOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as ICampaignTypeControllerDeleteCampaignTypeOutputError;
    }
  };
