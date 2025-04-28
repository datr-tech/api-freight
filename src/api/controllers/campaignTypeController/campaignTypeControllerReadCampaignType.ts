import { CampaignTypeModel } from '@app-af/api/models';
import { baseStat } from '@app-af/api/util/baseStat';
import {
  ICampaignTypeControllerReadCampaignType,
  ICampaignTypeControllerReadCampaignTypeOutputError,
  ICampaignTypeControllerReadCampaignTypeOutputSuccess,
} from '@app-af/interfaces/api/controllers';

/**
 * campaignTypeControllerReadCampaignType
 *
 * The freight API read campaignType controller.
 *
 * @param { ICampaignTypeControllerReadCampaignTypeInput } params
 * @param { Types.ObjectId } params.campaignTypeId
 *
 * @returns { Promise<ICampaignTypeControllerReadCampaignTypeOutput> }
 * @returns { Promise<ICampaignTypeControllerReadCampaignTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<ICampaignTypeControllerReadCampaignTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { campaignTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const campaignTypeControllerReadCampaignType: ICampaignTypeControllerReadCampaignType =
  async ({ campaignTypeId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'CampaignTypeModel'
       * using the received 'campaignTypeId' param.
       */
      const campaignTypeModel = await CampaignTypeModel.findById(campaignTypeId);

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model.
       */
      stat.error = false;
      stat.payload = { campaignTypeModel };

      /*
       * Cast the response object to 'ICampaignTypeControllerReadCampaignTypeOutputSuccess',
       * where the casting interface is a component of the binary union type
       * 'ICampaignTypeControllerReadCampaignTypeOutput'.
       */
      return stat as ICampaignTypeControllerReadCampaignTypeOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'ICampaignTypeControllerReadCampaignTypeOutputError',
       */
      return stat as ICampaignTypeControllerReadCampaignTypeOutputError;
    }
  };
