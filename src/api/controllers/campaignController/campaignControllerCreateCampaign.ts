import { CampaignModel } from '@app-af/api/models';
import { baseStat } from '@app-af/api/util/baseStat';
import {
  ICampaignControllerCreateCampaign,
  ICampaignControllerCreateCampaignOutputError,
  ICampaignControllerCreateCampaignOutputSuccess,
} from '@app-af/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * campaignControllerCreateCampaign
 *
 * The freight API create campaign controller.
 *
 * @param { ICampaignControllerCreateCampaignInput } params
 * @param { Types.ObjectId } params.campaignId
 * @param { Types.ObjectId } params.campaignTypeId
 * @param { Types.ObjectId } params.ownerUserId
 * @param { Types.ObjectId } params.projectId
 * @param { string } params.description  (Optional)
 * @param { string } params.name
 * @param { Types.ObjectId } params.adminStatusId
 * @param { Types.ObjectId } params.adminUserId
 * @param { number } params.createdAt  (Optional)
 * @param { number } params.updatedAt
 *
 * @returns { Promise<ICampaignControllerCreateCampaignOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { campaignModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const campaignControllerCreateCampaign: ICampaignControllerCreateCampaign =
  async ({
    campaignTypeId,
    ownerUserId,
    projectId,
    description,
    name,
    adminStatusId,
    adminUserId,
    createdAt,
    updatedAt,
  }) => {
    const stat = { ...baseStat };

    try {
      const campaignId = new Types.ObjectId();
      const modelParams = {
        campaignId,
        campaignTypeId,
        ownerUserId,
        projectId,
        description,
        name,
        adminStatusId,
        adminUserId,
        createdAt,
        updatedAt,
      };

      const campaignModel = new CampaignModel(modelParams);
      await campaignModel.save();

      stat.error = false;
      stat.payload = { campaignId };
      return stat as ICampaignControllerCreateCampaignOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as ICampaignControllerCreateCampaignOutputError;
    }
  };
