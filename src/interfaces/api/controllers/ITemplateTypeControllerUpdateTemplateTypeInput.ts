import { Types } from 'mongoose';

export interface ITemplateTypeControllerUpdateTemplateTypeInput {
  templateTypeId: Types.ObjectId;
  payload: {
    description?: string;

    name?: string;

    adminStatusId?: Types.ObjectId;

    adminUserId?: Types.ObjectId;

    createdAt?: number;

    updatedAt?: number;
  };
}
