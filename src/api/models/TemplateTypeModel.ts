import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
} from '@app-af/api/modelValidators';
import {
  templateTypeModelSchema,
  templateTypeModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-freight';
import { model, Schema } from 'mongoose';

const templateTypeSchema = new Schema(
  templateTypeModelSchema,
  templateTypeModelSchemaOptions,
);

templateTypeSchema.post('validate', modelValidatorAdminStatusId);
templateTypeSchema.post('validate', modelValidatorAdminUserId);

export const TemplateTypeModel = model('TemplateTypeModel', templateTypeSchema);
