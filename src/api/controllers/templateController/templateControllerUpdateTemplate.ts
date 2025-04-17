import { TemplateModel } from '@app/api/models';

export const templateControllerUpdateTemplate = async ({ templateId, payload }) => {
  const res = await TemplateModel.findOneAndUpdate(
    {
      _id: templateId,
    },
    payload,
    {
      includeResultMetadata: true,
    },
  );

  let existingDocUpdated;

  if (
    typeof res !== 'undefined' &&
    typeof res.lastErrorObject !== 'undefined' &&
    typeof res.lastErrorObject.updatedExisting !== 'undefined'
  ) {
    existingDocUpdated = res.lastErrorObject.updatedExisting === false;
  }

  return existingDocUpdated;
};
