const personaServiceHasUserMock = jest.fn().mockReturnValue(false);

jest.mock('@datr.tech/leith-common-services', () => ({
  __esModule: true,
  personaService: {
		hasUser: personaServiceHasUserMock
  }
}));

import { modelValidatorOwnerUserId } from "@app-af/api/modelValidators/foreign";
import { Types } from 'mongoose';

/**
 * modelValidatorOwnerUserId.negative
 *
 * A positive test for modelValidatorOwnerUserId where personaService.hasUser
 * (from '@datr.tech/leith-common-services') is mocked above, using personaServiceHasUserMock.
 */
describe( "modelValidatorOwnerUserId", () => {
	describe("negative", () => {
		test("should throw the expected error when the underlying personaService (mocked) returns false", async () => {
			/*
       * Arrange
       */
			const errorExpected = "ownerUserId: invalid";
      const idMock = new Types.ObjectId();
      const docMock = { ownerUserId: idMock };
      const nextMock = jest.fn();

      /*
       * Act
       */
			const handler = async () => {
				await modelValidatorOwnerUserId(docMock, nextMock);
			};

			/*
       * Assert
       */
			await expect(handler()).rejects.toThrowError(errorExpected);
		  expect( personaServiceHasUserMock ).toHaveBeenCalledTimes(1);
		  expect( personaServiceHasUserMock ).toHaveBeenCalledWith(expect.objectContaining({ userId: idMock }));
			expect(nextMock).not.toHaveBeenCalled();
		});
	});
}); 
