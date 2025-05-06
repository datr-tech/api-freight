import { Types } from 'mongoose';

export interface ITemplateTypeControllerUpdateTemplateTypeOutputSuccess {
  error: false;
  payload: {
    templateTypeId: Types.ObjectId;
    responseStatusCode: number;
  };
}
