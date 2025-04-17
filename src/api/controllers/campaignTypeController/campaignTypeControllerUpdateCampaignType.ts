import { CampaignTypeModel } from '@app/api/models';

export const campaignTypeControllerUpdateCampaignType = async ({ campaignTypeId, payload }) => {
  const res = await CampaignTypeModel.findOneAndUpdate(
    {
      _id: campaignTypeId,
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
