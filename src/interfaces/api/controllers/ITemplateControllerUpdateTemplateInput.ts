import { Types } from 'mongoose';

export interface ITemplateControllerUpdateTemplateInput {
  templateId: Types.ObjectId;
  payload: {
    campaignId?: Types.ObjectId;

    templateTypeId?: Types.ObjectId;

    ownerUserId?: Types.ObjectId;

    description?: string;

    name?: string;

    adminStatusId?: Types.ObjectId;

    adminUserId?: Types.ObjectId;

    createdAt?: number;

    updatedAt?: number;
  };
}
