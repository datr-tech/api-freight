import { Types } from 'mongoose';

export interface IProjectControllerCreateProjectInput {
  projectTypeId: Types.ObjectId;
  organisationId: Types.ObjectId;
  ownerUserId: Types.ObjectId;
  description: string | undefined;
  name: string;
  adminStatusId: Types.ObjectId;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}
