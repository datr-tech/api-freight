import { Types } from 'mongoose';

export interface IProjectModel {
  projectId: Types.ObjectId;
  projectTypeId: Types.ObjectId;
  organisationId: Types.ObjectId;
  ownerUserId: Types.ObjectId;
  description: string | undefined;
  name: string;
  adminStatusId: Types.ObjectId | undefined;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}
