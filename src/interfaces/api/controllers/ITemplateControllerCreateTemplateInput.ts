import { Types } from 'mongoose';

export interface ITemplateControllerCreateTemplateInput {
  campaignId: Types.ObjectId;
  templateTypeId: Types.ObjectId;
  ownerUserId: Types.ObjectId;
  description: string | undefined;
  name: string;
  adminStatusId: Types.ObjectId;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt: number;
}
