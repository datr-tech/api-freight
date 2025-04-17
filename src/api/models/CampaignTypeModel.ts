import { model, Schema } from 'mongoose';
import { campaignTypeModelSchema, campaignTypeModelSchemaOptions } from '@freight/freight-model-schemas';
import { modelValidatorAdminStatusId, modelValidatorAdminUserId } from '@app/api/modelValidators';

const campaignTypeSchema = new Schema(campaignTypeModelSchema, campaignTypeModelSchemaOptions);

campaignTypeSchema.post('validate', modelValidatorAdminStatusId);
campaignTypeSchema.post('validate', modelValidatorAdminUserId);

export const CampaignTypeModel = model('CampaignTypeModel', campaignTypeSchema);
