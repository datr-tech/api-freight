import { model, Schema } from 'mongoose';
import { templateTypeModelSchema, templateTypeModelSchemaOptions } from '@freight/freight-model-schemas';
import { modelValidatorAdminStatusId, modelValidatorAdminUserId } from '@app/api/modelValidators';

const templateTypeSchema = new Schema(templateTypeModelSchema, templateTypeModelSchemaOptions);

templateTypeSchema.post('validate', modelValidatorAdminStatusId);
templateTypeSchema.post('validate', modelValidatorAdminUserId);

export const TemplateTypeModel = model('TemplateTypeModel', templateTypeSchema);
