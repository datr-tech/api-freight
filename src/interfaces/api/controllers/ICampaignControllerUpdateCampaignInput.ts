import { Types } from 'mongoose';

export interface ICampaignControllerUpdateCampaignInput {
  campaignId: Types.ObjectId;
  payload: {
    campaignTypeId?: Types.ObjectId;

    ownerUserId?: Types.ObjectId;

    projectId?: Types.ObjectId;

    description?: string;

    name?: string;

    adminStatusId?: Types.ObjectId;

    adminUserId?: Types.ObjectId;

    createdAt?: number;

    updatedAt?: number;
  };
}
