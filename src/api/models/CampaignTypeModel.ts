import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
} from '@app-af/api/modelValidators';
import {
  campaignTypeModelSchema,
  campaignTypeModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-freight';
import { model, Schema } from 'mongoose';

const campaignTypeSchema = new Schema(
  campaignTypeModelSchema,
  campaignTypeModelSchemaOptions,
);

campaignTypeSchema.post('validate', modelValidatorAdminStatusId);
campaignTypeSchema.post('validate', modelValidatorAdminUserId);

export const CampaignTypeModel = model('CampaignTypeModel', campaignTypeSchema);
