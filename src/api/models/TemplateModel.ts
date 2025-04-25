import { model, Schema } from 'mongoose';
import { templateModelSchema, templateModelSchemaOptions } from '@datr.tech/parcel-model-schemas-freight';
import {
  modelValidatorCampaignId,
  modelValidatorTemplateTypeId,
  modelValidatorOwnerUserId,
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
} from '@app/api/modelValidators';

const templateSchema = new Schema(templateModelSchema, templateModelSchemaOptions);

templateSchema.post('validate', modelValidatorCampaignId);
templateSchema.post('validate', modelValidatorTemplateTypeId);
templateSchema.post('validate', modelValidatorOwnerUserId);
templateSchema.post('validate', modelValidatorAdminStatusId);
templateSchema.post('validate', modelValidatorAdminUserId);

export const TemplateModel = model('TemplateModel', templateSchema);
