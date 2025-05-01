const personaServiceHasUserMock = jest.fn().mockReturnValue(true);

jest.mock('@datr.tech/leith-common-services', () => ({
  __esModule: true,
  personaService: {
		hasUser: personaServiceHasUserMock
  }
}));

import { modelValidatorOwnerUserId } from "@app-af/api/modelValidators/foreign";
import { Types } from 'mongoose';

/**
 * modelValidatorOwnerUserId.positive
 *
 * A positive test for modelValidatorOwnerUserId where personaService.hasUser
 * (from '@datr.tech/leith-common-services') is mocked above, using personaServiceHasUserMock.
 */
describe( "modelValidatorOwnerUserId", () => {
	describe("positive", () => {
		test("should not throw an error when the underlying personaService (mocked) returns true", async () => {
			/*
       * Arrange
       */
      const idMock = new Types.ObjectId();
      const docMock = { ownerUserId: idMock };
      const nextMock = jest.fn();

      /*
       * Act
       */
			await modelValidatorOwnerUserId(docMock, nextMock);

			/*
       * Assert
       */
		  expect( personaServiceHasUserMock ).toHaveBeenCalledTimes(1);
      expect( personaServiceHasUserMock ).toHaveBeenCalledWith(expect.objectContaining({ userId: idMock }));
			expect(nextMock).toHaveBeenCalledTimes(1);
		});
	});
}); 
