import { ICampaignModel } from '@app-af/interfaces/api/models';

export interface ICampaignControllerReadCampaignOutputSuccess {
  error: false;
  payload: {
    campaignModel: ICampaignModel;
  };
}
