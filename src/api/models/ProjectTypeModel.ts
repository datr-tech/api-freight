import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
} from '@app-af/api/modelValidators/foreign';

import {
  projectTypeModelSchema,
  projectTypeModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-freight';

import { model, Schema } from 'mongoose';

const projectTypeSchema = new Schema(
  projectTypeModelSchema,
  projectTypeModelSchemaOptions,
);

projectTypeSchema.post('validate', modelValidatorAdminStatusId);
projectTypeSchema.post('validate', modelValidatorAdminUserId);

export const ProjectTypeModel = model('ProjectTypeModel', projectTypeSchema);
