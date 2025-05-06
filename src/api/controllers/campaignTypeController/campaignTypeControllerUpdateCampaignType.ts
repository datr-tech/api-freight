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
 * @returns { Promise<ICampaignTypeControllerUpdateCampaignTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<ICampaignTypeControllerUpdateCampaignTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { campaignTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const campaignTypeControllerUpdateCampaignType: ICampaignTypeControllerUpdateCampaignType =
  async ({ campaignTypeId, payload }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'CampaignTypeModel'
       * using the received 'campaignTypeId' param.
       * When successful, update the found model using
       * the key value pairs (or fields) from within the
       * 'payload' param.
       */
      await CampaignTypeModel.findOneAndUpdate(
        {
          _id: campaignTypeId,
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
      stat.payload = {
        campaignTypeId,
        responseStatusCode: 200,
      };

      /*
       * Cast the response object to 'ICampaignTypeControllerUpdateCampaignTypeOutputSuccess',
       * where the casting interface is a component of the binary union type
       * 'ICampaignTypeControllerUpdateCampaignTypeOutput'.
       */
      return stat as ICampaignTypeControllerUpdateCampaignTypeOutputSuccess;
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
       * Cast the response object to 'ICampaignTypeControllerUpdateCampaignTypeOutputError',
       */
      return stat as ICampaignTypeControllerUpdateCampaignTypeOutputError;
    }
  };
