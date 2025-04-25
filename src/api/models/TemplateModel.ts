import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
  modelValidatorCampaignId,
  modelValidatorOwnerUserId,
  modelValidatorTemplateTypeId,
} from '@app-af/api/modelValidators';
import {
  templateModelSchema,
  templateModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-freight';
import { model, Schema } from 'mongoose';

const templateSchema = new Schema(templateModelSchema, templateModelSchemaOptions);

templateSchema.post('validate', modelValidatorCampaignId);
templateSchema.post('validate', modelValidatorTemplateTypeId);
templateSchema.post('validate', modelValidatorOwnerUserId);
templateSchema.post('validate', modelValidatorAdminStatusId);
templateSchema.post('validate', modelValidatorAdminUserId);

export const TemplateModel = model('TemplateModel', templateSchema);
