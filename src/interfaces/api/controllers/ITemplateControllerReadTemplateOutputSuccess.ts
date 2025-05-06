import { ITemplateModel } from '@app-af/interfaces/api/models';

export interface ITemplateControllerReadTemplateOutputSuccess {
  error: false;
  payload: {
    templateModel: ITemplateModel;
    responseStatusCode: number;
  };
}
