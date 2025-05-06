import { IProjectModel } from '@app-af/interfaces/api/models';

export interface IProjectControllerReadProjectOutputSuccess {
  error: false;
  payload: {
    projectModel: IProjectModel;
    responseStatusCode: number;
  };
}
