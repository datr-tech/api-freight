import { Types } from 'mongoose';

export interface ICampaignTypeControllerDeleteCampaignTypeOutputSuccess {
  error: false;
  payload: {
    campaignTypeId: Types.ObjectId;
    responseStatusCode: number;
  };
}
