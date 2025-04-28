import { Types } from 'mongoose';

export interface ICampaignTypeControllerCreateCampaignTypeOutputSuccess {
  error: false;
  payload: {
    campaignTypeId: Types.ObjectId;
  };
}
