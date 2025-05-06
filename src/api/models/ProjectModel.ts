import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
  modelValidatorOrganisationId,
  modelValidatorOwnerUserId,
} from '@app-af/api/modelValidators/foreign';

import { modelValidatorProjectTypeId } from '@app-af/api/modelValidators/local/modelValidatorProjectTypeId';

import {
  projectModelSchema,
  projectModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-freight';

import { model, Schema } from 'mongoose';

const projectSchema = new Schema(projectModelSchema, projectModelSchemaOptions);

projectSchema.post('validate', modelValidatorProjectTypeId);
projectSchema.post('validate', modelValidatorOrganisationId);
projectSchema.post('validate', modelValidatorOwnerUserId);
projectSchema.post('validate', modelValidatorAdminStatusId);
projectSchema.post('validate', modelValidatorAdminUserId);

export const ProjectModel = model('ProjectModel', projectSchema);
