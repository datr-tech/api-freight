import { ITemplateTypeModel } from '@app-af/interfaces/api/models';

export interface ITemplateTypeControllerReadTemplateTypeOutputSuccess {
  error: false;
  payload: {
    templateTypeModel: ITemplateTypeModel;
    responseStatusCode: number;
  };
}
