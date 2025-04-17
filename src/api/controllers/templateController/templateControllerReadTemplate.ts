import { TemplateModel } from '@app/api/models';

export const templateControllerReadTemplate = async ({ templateId }) => {
  const template = await TemplateModel.findById(templateId);

  return template;
};
