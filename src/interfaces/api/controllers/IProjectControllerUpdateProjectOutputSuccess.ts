import { Types } from 'mongoose';

export interface IProjectControllerUpdateProjectOutputSuccess {
  error: false;
  payload: {
    projectId: Types.ObjectId;
    responseStatusCode: number;
  };
}
