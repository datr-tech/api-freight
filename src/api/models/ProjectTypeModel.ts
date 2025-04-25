import { model, Schema } from 'mongoose';
import { projectTypeModelSchema, projectTypeModelSchemaOptions } from '@datr.tech/parcel-model-schemas-freight';
import { modelValidatorAdminStatusId, modelValidatorAdminUserId } from '@app/api/modelValidators';

const projectTypeSchema = new Schema(projectTypeModelSchema, projectTypeModelSchemaOptions);

projectTypeSchema.post('validate', modelValidatorAdminStatusId);
projectTypeSchema.post('validate', modelValidatorAdminUserId);

export const ProjectTypeModel = model('ProjectTypeModel', projectTypeSchema);
