import { personaService } from '@datr.tech/leith-common-services';

export const modelValidatorOwnerUserId = async (doc, next) => {
  let ownerUserId;
  let hasUser = false;

  if (doc && typeof doc.ownerUserId !== 'undefined') {
    ownerUserId = doc.ownerUserId;
  }

  if (ownerUserId) {
    hasUser = await personaService.hasUser({
      userId: ownerUserId,
      isAdmin: false,
    });
  }

  if (!hasUser) {
    throw new Error('ownerUserId: invalid');
  }

  next();
};
