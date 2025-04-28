import { Types } from 'mongoose';

export interface ICampaignControllerDeleteCampaignOutputSuccess {
  error: false;
  payload: {
    campaignId: Types.ObjectId;
  };
}
