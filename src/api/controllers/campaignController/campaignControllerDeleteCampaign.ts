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
 * @returns { Promise<ICampaignControllerDeleteCampaignOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<ICampaignControllerDeleteCampaignOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { campaignModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const campaignControllerDeleteCampaign: ICampaignControllerDeleteCampaign =
  async ({ campaignId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'CampaignModel'
       * using the received 'campaignId' param.
       * When successful, perform a "soft delete" upon the
       * found model by updating the value of the model's
       * 'adminStatusId' field.
       */
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

      /*
       * Use the standard controller response object,
       * 'stat', to return the primary key of the
       * "soft deleted" model.
       */
      stat.error = false;
      stat.payload = { campaignId };

      /*
       * Cast the response object to
       * 'ICampaignControllerDeleteCampaignOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'ICampaignControllerDeleteCampaignOutput'.
       */
      return stat as ICampaignControllerDeleteCampaignOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'ICampaignControllerDeleteCampaignOutputError',
       */
      return stat as ICampaignControllerDeleteCampaignOutputError;
    }
  };
