import { Types } from 'mongoose';

export interface ICampaignControllerCreateCampaignInput {
  campaignTypeId: Types.ObjectId;
  ownerUserId: Types.ObjectId;
  projectId: Types.ObjectId;
  description: string | undefined;
  name: string;
  adminStatusId: Types.ObjectId;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}
