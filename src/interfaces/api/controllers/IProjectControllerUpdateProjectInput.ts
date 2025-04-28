import { Types } from 'mongoose';

export interface IProjectControllerUpdateProjectInput {
  projectId: Types.ObjectId;
  payload: {
    projectTypeId?: Types.ObjectId;

    organisationId?: Types.ObjectId;

    ownerUserId?: Types.ObjectId;

    description?: string;

    name?: string;

    adminStatusId?: Types.ObjectId;

    adminUserId?: Types.ObjectId;

    createdAt?: number;

    updatedAt?: number;
  };
}
