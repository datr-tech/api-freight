import { IProjectTypeModel } from '@app-af/interfaces/api/models';

export interface IProjectTypeControllerReadProjectTypeOutputSuccess {
  error: false;
  payload: {
    projectTypeModel: IProjectTypeModel;
    responseStatusCode: number;
  };
}
