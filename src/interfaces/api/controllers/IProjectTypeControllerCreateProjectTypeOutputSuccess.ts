import { Types } from 'mongoose';

export interface IProjectTypeControllerCreateProjectTypeOutputSuccess {
  error: false;
  payload: {
    projectTypeId: Types.ObjectId;
  };
}
