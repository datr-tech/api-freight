import { TemplateTypeModel } from '@app-af/api/models';

export const templateTypeControllerReadTemplateType = async ({ templateTypeId }) => {
  const templateType = await TemplateTypeModel.findById(templateTypeId);

  return templateType;
};
