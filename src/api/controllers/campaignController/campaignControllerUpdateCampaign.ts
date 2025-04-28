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
 * @returns { Promise<ICampaignControllerUpdateCampaignOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<ICampaignControllerUpdateCampaignOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { campaignModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const campaignControllerUpdateCampaign: ICampaignControllerUpdateCampaign =
  async ({ campaignId, payload }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'CampaignModel'
       * using the received 'campaignId' param.
       * When successful, update the found model using
       * the key value pairs (or fields) from within the
       * 'payload' param.
       */
      await CampaignModel.findOneAndUpdate(
        {
          _id: campaignId,
        },
        payload,
        {
          includeResultMetadata: true,
        },
      );

      /*
       * Use the standard controller response object,
       * 'stat', to return the updated model's primary key.
       */
      stat.error = false;
      stat.payload = { campaignId };

      /*
       * Cast the response object to 'ICampaignControllerUpdateCampaignOutputSuccess',
       * where the casting interface is a component of the binary union type
       * 'ICampaignControllerUpdateCampaignOutput'.
       */
      return stat as ICampaignControllerUpdateCampaignOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'ICampaignControllerUpdateCampaignOutputError',
       */
      return stat as ICampaignControllerUpdateCampaignOutputError;
    }
  };
