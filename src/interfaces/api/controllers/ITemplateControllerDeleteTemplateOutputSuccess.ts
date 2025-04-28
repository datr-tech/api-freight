import { Types } from 'mongoose';

export interface ITemplateControllerDeleteTemplateOutputSuccess {
  error: false;
  payload: {
    templateId: Types.ObjectId;
  };
}
