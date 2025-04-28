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
 * @returns { Promise<ICampaignTypeControllerCreateCampaignTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<ICampaignTypeControllerCreateCampaignTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { campaignTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const campaignTypeControllerCreateCampaignType: ICampaignTypeControllerCreateCampaignType =
  async ({ description, name, adminStatusId, adminUserId, createdAt, updatedAt }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Populate the local 'modelParams' variable
       * with the received inputs.
       */
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

      /*
       * Use the populated 'modelParams' variable
       * to create a new instance of 'CampaignTypeModel'.
       * 'db-freight'.
       */
      const campaignTypeModel = new CampaignTypeModel(modelParams);

      /*
       * The save the created model to the associated store: 'db-freight',
       */
      await campaignTypeModel.save();

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model.
       */
      stat.error = false;
      stat.payload = { campaignTypeId: campaignTypeModel.id };

      /*
       * Cast the response object to
       * 'ICampaignTypeControllerCreateCampaignTypeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type
       * 'ICampaignTypeControllerCreateCampaignTypeOutput'.
       */
      return stat as ICampaignTypeControllerCreateCampaignTypeOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'ICampaignTypeControllerCreateCampaignTypeOutputError',
       */
      return stat as ICampaignTypeControllerCreateCampaignTypeOutputError;
    }
  };
