import { Types } from 'mongoose';

export interface IProjectTypeControllerDeleteProjectTypeOutputSuccess {
  error: false;
  payload: {
    projectTypeId: Types.ObjectId;
  };
}
