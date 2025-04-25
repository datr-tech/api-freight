import { model, Schema } from 'mongoose';
import { templateTypeModelSchema, templateTypeModelSchemaOptions } from '@datr.tech/parcel-model-schemas-freight';
import { modelValidatorAdminStatusId, modelValidatorAdminUserId } from '@app/api/modelValidators';

const templateTypeSchema = new Schema(templateTypeModelSchema, templateTypeModelSchemaOptions);

templateTypeSchema.post('validate', modelValidatorAdminStatusId);
templateTypeSchema.post('validate', modelValidatorAdminUserId);

export const TemplateTypeModel = model('TemplateTypeModel', templateTypeSchema);
