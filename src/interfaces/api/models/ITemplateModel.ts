import { Types } from 'mongoose';

export interface ITemplateModel {
  templateId: Types.ObjectId;
  campaignId: Types.ObjectId;
  templateTypeId: Types.ObjectId;
  ownerUserId: Types.ObjectId;
  description: string | undefined;
  name: string;
  adminStatusId: Types.ObjectId | undefined;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}
