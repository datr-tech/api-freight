import { CampaignModel } from '@app-af/api/models';

export const campaignControllerUpdateCampaign = async ({ campaignId, payload }) => {
  const res = await CampaignModel.findOneAndUpdate(
    {
      _id: campaignId,
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
