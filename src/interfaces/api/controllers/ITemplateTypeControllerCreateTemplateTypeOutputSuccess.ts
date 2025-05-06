import { Types } from 'mongoose';

export interface ITemplateTypeControllerCreateTemplateTypeOutputSuccess {
  error: false;
  payload: {
    templateTypeId: Types.ObjectId;
    responseStatusCode: number;
  };
}
