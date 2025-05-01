const personaServiceHasOrganisationMock = jest.fn().mockReturnValue(false);

jest.mock('@datr.tech/leith-common-services', () => ({
  __esModule: true,
  personaService: {
    hasOrganisation: personaServiceHasOrganisationMock,
  },
}));

import { modelValidatorOrganisationId } from '@app-af/api/modelValidators/foreign';
import { Types } from 'mongoose';

describe('modelValidatorOrganisationId', () => {
  describe('negative', () => {
    test('should throw the expected error when the underlying personaService (mocked) returns false', async () => {
      /*
       * Arrange
       */
      const errorExpected = 'organisationId: invalid';
      const idMock = new Types.ObjectId();
      const docMock = { organisationId: idMock };
      const nextMock = jest.fn();

      /*
       * Act
       */
      const handler = async () => {
        await modelValidatorOrganisationId(docMock, nextMock);
      };

      /*
       * Assert
       */
      await expect(handler()).rejects.toThrowError(errorExpected);
      expect(personaServiceHasOrganisationMock).toHaveBeenCalledTimes(1);
      expect(personaServiceHasOrganisationMock).toHaveBeenCalledWith(
        expect.objectContaining({ organisationId: idMock }),
      );
      expect(nextMock).not.toHaveBeenCalled();
    });
  });
});
