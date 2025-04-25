import { model, Schema } from 'mongoose';
import { campaignModelSchema, campaignModelSchemaOptions } from '@datr.tech/parcel-model-schemas-freight';
import {
  modelValidatorCampaignTypeId,
  modelValidatorOwnerUserId,
  modelValidatorProjectId,
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
} from '@app/api/modelValidators';

const campaignSchema = new Schema(campaignModelSchema, campaignModelSchemaOptions);

campaignSchema.post('validate', modelValidatorCampaignTypeId);
campaignSchema.post('validate', modelValidatorOwnerUserId);
campaignSchema.post('validate', modelValidatorProjectId);
campaignSchema.post('validate', modelValidatorAdminStatusId);
campaignSchema.post('validate', modelValidatorAdminUserId);

export const CampaignModel = model('CampaignModel', campaignSchema);
