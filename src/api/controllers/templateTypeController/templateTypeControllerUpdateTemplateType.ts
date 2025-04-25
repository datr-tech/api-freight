import { TemplateTypeModel } from '@app-af/api/models';

export const templateTypeControllerUpdateTemplateType = async ({
  templateTypeId,
  payload,
}) => {
  const res = await TemplateTypeModel.findOneAndUpdate(
    {
      _id: templateTypeId,
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
