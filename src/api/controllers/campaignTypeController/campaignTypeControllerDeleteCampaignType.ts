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
 * @returns { Promise<ICampaignTypeControllerDeleteCampaignTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<ICampaignTypeControllerDeleteCampaignTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { campaignTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const campaignTypeControllerDeleteCampaignType: ICampaignTypeControllerDeleteCampaignType =
  async ({ campaignTypeId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'CampaignTypeModel'
       * using the received 'campaignTypeId' param.
       * When successful, perform a "soft delete" upon the
       * found model by updating the value of the model's
       * 'adminStatusId' field.
       */
      const campaignTypeModel = await CampaignTypeModel.findOneAndUpdate(
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

      /*
       * Use the standard controller response object,
       * 'stat', to return the primary key of the
       * "soft deleted" model.
       */
      stat.error = false;
      stat.payload = { campaignTypeId };

      /*
       * Cast the response object to
       * 'ICampaignTypeControllerDeleteCampaignTypeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'ICampaignTypeControllerDeleteCampaignTypeOutput'.
       */
      return stat as ICampaignTypeControllerDeleteCampaignTypeOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'ICampaignTypeControllerDeleteCampaignTypeOutputError',
       */
      return stat as ICampaignTypeControllerDeleteCampaignTypeOutputError;
    }
  };
