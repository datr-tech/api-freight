import { TemplateTypeModel } from '@app-af/api/models';

export const modelValidatorTemplateTypeId = async (doc, next) => {
  let templateType;
  let templateTypeId;

  if (doc && typeof doc.templateTypeId !== 'undefined') {
    templateTypeId = doc.templateTypeId;
  }

  if (templateTypeId) {
    templateType = await TemplateTypeModel.findById(templateTypeId);
  }

  if (!templateType) {
    throw new Error('templateTypeId: invalid');
  }

  next();
};
