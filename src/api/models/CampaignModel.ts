import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
  modelValidatorCampaignTypeId,
  modelValidatorOwnerUserId,
  modelValidatorProjectId,
} from '@app-af/api/modelValidators';
import {
  campaignModelSchema,
  campaignModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-freight';
import { model, Schema } from 'mongoose';

const campaignSchema = new Schema(campaignModelSchema, campaignModelSchemaOptions);

campaignSchema.post('validate', modelValidatorCampaignTypeId);
campaignSchema.post('validate', modelValidatorOwnerUserId);
campaignSchema.post('validate', modelValidatorProjectId);
campaignSchema.post('validate', modelValidatorAdminStatusId);
campaignSchema.post('validate', modelValidatorAdminUserId);

export const CampaignModel = model('CampaignModel', campaignSchema);
