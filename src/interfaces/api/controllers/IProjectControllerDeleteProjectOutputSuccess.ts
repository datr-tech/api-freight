import { Types } from 'mongoose';

export interface IProjectControllerDeleteProjectOutputSuccess {
  error: false;
  payload: {
    projectId: Types.ObjectId;
    responseStatusCode: number;
  };
}
