import { ProjectModel } from '@app/api/models';

export const projectControllerUpdateProject = async ({ projectId, payload }) => {
  const res = await ProjectModel.findOneAndUpdate(
    {
      _id: projectId,
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
