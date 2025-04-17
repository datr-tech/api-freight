import { Types } from 'mongoose';

export interface ICampaignModel {
  campaignId: Types.ObjectId;
  campaignTypeId: Types.ObjectId;
  ownerUserId: Types.ObjectId;
  projectId: Types.ObjectId;
  description: string | undefined;
  name: string;
  adminStatusId: Types.ObjectId | undefined;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}
