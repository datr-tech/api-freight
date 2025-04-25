import { model, Schema } from 'mongoose';
import { projectModelSchema, projectModelSchemaOptions } from '@datr.tech/parcel-model-schemas-freight';
import {
  modelValidatorProjectTypeId,
  modelValidatorOrganisationId,
  modelValidatorOwnerUserId,
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
} from '@app/api/modelValidators';

const projectSchema = new Schema(projectModelSchema, projectModelSchemaOptions);

projectSchema.post('validate', modelValidatorProjectTypeId);
projectSchema.post('validate', modelValidatorOrganisationId);
projectSchema.post('validate', modelValidatorOwnerUserId);
projectSchema.post('validate', modelValidatorAdminStatusId);
projectSchema.post('validate', modelValidatorAdminUserId);

export const ProjectModel = model('ProjectModel', projectSchema);
