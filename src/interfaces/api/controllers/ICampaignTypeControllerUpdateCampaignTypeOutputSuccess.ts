import { Types } from 'mongoose';

export interface ICampaignTypeControllerUpdateCampaignTypeOutputSuccess {
  error: false;
  payload: {
    campaignTypeId: Types.ObjectId;
    responseStatusCode: number;
  };
}
