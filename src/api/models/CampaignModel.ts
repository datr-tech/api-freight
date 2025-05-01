import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
  modelValidatorOwnerUserId,
} from '@app-af/api/modelValidators/foreign';

import { modelValidatorCampaignTypeId } from '@app-af/api/modelValidators/local/modelValidatorCampaignTypeId';

import { modelValidatorProjectId } from '@app-af/api/modelValidators/local/modelValidatorProjectId';

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
