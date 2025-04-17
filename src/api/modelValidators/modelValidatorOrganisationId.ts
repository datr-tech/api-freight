import { personaService } from '@freight/common-api-services';

export const modelValidatorOrganisationId = async (doc, next) => {
  let organisationId;
  let hasOrganisation = false;

  if (doc && typeof doc.organisationId !== 'undefined') {
    organisationId = doc.organisationId;
  }

  if (organisationId) {
    hasOrganisation = await personaService.hasOrganisation({
      organisationId,
    });
  }

  if (!hasOrganisation) {
    throw new Error('organisationId: invalid');
  }

  next();
};
