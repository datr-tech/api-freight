import { Types } from 'mongoose';

export interface ICampaignControllerUpdateCampaignOutputSuccess {
  error: false;
  payload: {
    campaignId: Types.ObjectId;
    responseStatusCode: number;
  };
}
