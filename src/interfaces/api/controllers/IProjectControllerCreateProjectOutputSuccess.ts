import { Types } from 'mongoose';

export interface IProjectControllerCreateProjectOutputSuccess {
  error: false;
  payload: {
    projectId: Types.ObjectId;
  };
}
