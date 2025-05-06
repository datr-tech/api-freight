import { Types } from 'mongoose';

export interface ITemplateControllerUpdateTemplateOutputSuccess {
  error: false;
  payload: {
    templateId: Types.ObjectId;
    responseStatusCode: number;
  };
}
