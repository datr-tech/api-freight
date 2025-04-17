import { ProjectTypeModel } from '@app/api/models';

export const projectTypeControllerUpdateProjectType = async ({ projectTypeId, payload }) => {
  const res = await ProjectTypeModel.findOneAndUpdate(
    {
      _id: projectTypeId,
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
