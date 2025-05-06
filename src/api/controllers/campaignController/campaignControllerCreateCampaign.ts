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
 * @param { number } params.updatedAt  (Optional)
 *
 * @returns { Promise<ICampaignControllerCreateCampaignOutput> }
 * @returns { Promise<ICampaignControllerCreateCampaignOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<ICampaignControllerCreateCampaignOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { campaignModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
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
      /*
       * Populate the local 'modelParams' variable
       * with the received inputs.
       */
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

      /*
       * Use the populated 'modelParams' variable
       * to create a new instance of 'CampaignModel'.
       * 'db-freight'. Then save the created
       * model to the associated store: 'db-freight',
       */
      const campaignModel = new CampaignModel(modelParams);
      await campaignModel.save();

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model's primary key.
       */
      stat.error = false;
      stat.payload = {
        campaignId,
        responseStatusCode: 201,
      };

      /*
       * Cast the response object to
       * 'ICampaignControllerCreateCampaignOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'ICampaignControllerCreateCampaignOutput'.
       */
      return stat as ICampaignControllerCreateCampaignOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = {
        message,
        responseStatusCode: 404,
      };

      /*
       * Cast the response object to 'ICampaignControllerCreateCampaignOutputError',
       */
      return stat as ICampaignControllerCreateCampaignOutputError;
    }
  };
