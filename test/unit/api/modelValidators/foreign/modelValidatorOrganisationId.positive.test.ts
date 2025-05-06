const personaServiceHasOrganisationMock = jest.fn().mockReturnValue(true);

jest.mock('@datr.tech/leith-common-services', () => ({
  __esModule: true,
  personaService: {
    hasOrganisation: personaServiceHasOrganisationMock,
  },
}));

import { modelValidatorOrganisationId } from '@app-af/api/modelValidators/foreign';
import { Types } from 'mongoose';

/**
 * modelValidatorOrganisationId.positive
 *
 * A positive test for modelValidatorOrganisationId where personaService.hasOrganisation
 * (from '@datr.tech/leith-common-services') is mocked above, using personaServiceHasOrganisationMock.
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
describe('modelValidatorOrganisationId', () => {
  describe('positive', () => {
    test('should not throw an error when the underlying personaService (mocked) returns true', async () => {
      /*
       * Arrange
       */
      const idMock = new Types.ObjectId();
      const docMock = { organisationId: idMock };
      const nextMock = jest.fn();

      /*
       * Act
       */
      await modelValidatorOrganisationId(docMock, nextMock);

      /*
       * Assert
       */
      expect(personaServiceHasOrganisationMock).toHaveBeenCalledTimes(1);
      expect(personaServiceHasOrganisationMock).toHaveBeenCalledWith(
        expect.objectContaining({ organisationId: idMock }),
      );
      expect(nextMock).toHaveBeenCalledTimes(1);
    });
  });
});
