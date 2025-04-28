import { CampaignTypeModel } from '@app-af/api/models';
import { baseStat } from '@app-af/api/util/baseStat';
import {
  ICampaignTypeControllerCreateCampaignType,
  ICampaignTypeControllerCreateCampaignTypeOutputError,
  ICampaignTypeControllerCreateCampaignTypeOutputSuccess,
} from '@app-af/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * campaignTypeControllerCreateCampaignType
 *
 * The freight API create campaignType controller.
 *
 * @param { ICampaignTypeControllerCreateCampaignTypeInput } params
 * @param { Types.ObjectId } params.campaignTypeId
 * @param { string } params.description  (Optional)
 * @param { string } params.name
 * @param { Types.ObjectId } params.adminStatusId
 * @param { Types.ObjectId } params.adminUserId
 * @param { number } params.createdAt  (Optional)
 * @param { number } params.updatedAt
 *
 * @returns { Promise<ICampaignTypeControllerCreateCampaignTypeOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { campaignTypeModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const campaignTypeControllerCreateCampaignType: ICampaignTypeControllerCreateCampaignType =
  async ({ description, name, adminStatusId, adminUserId, createdAt, updatedAt }) => {
    const stat = { ...baseStat };

    try {
      const campaignTypeId = new Types.ObjectId();
      const modelParams = {
        campaignTypeId,
        description,
        name,
        adminStatusId,
        adminUserId,
        createdAt,
        updatedAt,
      };

      const campaignTypeModel = new CampaignTypeModel(modelParams);
      await campaignTypeModel.save();

      stat.error = false;
      stat.payload = { campaignTypeId };
      return stat as ICampaignTypeControllerCreateCampaignTypeOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as ICampaignTypeControllerCreateCampaignTypeOutputError;
    }
  };
