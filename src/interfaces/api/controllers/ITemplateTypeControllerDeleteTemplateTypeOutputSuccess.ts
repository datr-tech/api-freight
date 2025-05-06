import { Types } from 'mongoose';

export interface ITemplateTypeControllerDeleteTemplateTypeOutputSuccess {
  error: false;
  payload: {
    templateTypeId: Types.ObjectId;
    responseStatusCode: number;
  };
}
