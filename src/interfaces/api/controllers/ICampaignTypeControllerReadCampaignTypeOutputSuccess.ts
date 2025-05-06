import { ICampaignTypeModel } from '@app-af/interfaces/api/models';

export interface ICampaignTypeControllerReadCampaignTypeOutputSuccess {
  error: false;
  payload: {
    campaignTypeModel: ICampaignTypeModel;
    responseStatusCode: number;
  };
}
