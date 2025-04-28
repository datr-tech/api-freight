import { Types } from 'mongoose';

export interface ITemplateControllerCreateTemplateOutputSuccess {
  error: false;
  payload: {
    templateId: Types.ObjectId;
  };
}
