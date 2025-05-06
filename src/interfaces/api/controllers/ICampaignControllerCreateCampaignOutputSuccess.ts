import { Types } from 'mongoose';

export interface ICampaignControllerCreateCampaignOutputSuccess {
  error: false;
  payload: {
    campaignId: Types.ObjectId;
    responseStatusCode: number;
  };
}
