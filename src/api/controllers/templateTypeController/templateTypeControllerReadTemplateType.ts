import { TemplateTypeModel } from '@app/api/models';

export const templateTypeControllerReadTemplateType = async ({ templateTypeId }) => {
  const templateType = await TemplateTypeModel.findById(templateTypeId);

  return templateType;
};
