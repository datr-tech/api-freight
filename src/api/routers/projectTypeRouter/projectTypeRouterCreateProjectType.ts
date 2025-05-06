import { projectTypeController } from '@app-af/api/controllers/projectTypeController';
import {
  IProjectTypeControllerCreateProjectTypeOutputError as IControllerError,
  IProjectTypeControllerCreateProjectTypeOutputSuccess as IControllerSuccess,
} from '@app-af/interfaces/api/controllers';
import { IProjectTypeModel } from '@app-af/interfaces/api/models/IProjectTypeModel';
import { projectTypeValidationSchemaCreateProjectType } from '@datr.tech/cargo-router-validation-schemas-freight';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

/**
 * @name					projectTypeRouterCreateProjectType
 *
 * @description		The 'createProjectType' router for 'projectType', whose expected
 *                inputs have been defined within the following schema:
 *                'projectTypeValidationSchemaCreateProjectType'.
 *
 *                The schema will be used by 'express-validator' to perform input validation.
 *                When the validation process succeeds, control will pass to the associated
 *                controller, 'projectTypeController', which, when successful, will return
 *                a common status (or 'stat') object, whose 'payload' will contain
 *                'projectTypeId'.
 *
 * @param					{Request}		req		The Express request.
 * @param         {Response}	res		The Express response.
 * @return				{undefined}
 *
 * @author				Datr.Tech Admin <admin@datr.tech>
 * @version				0.3.2
 *
 * @see		        | Outcomes                    | HTTP status codes |
 *                | --------------------------- | ----------------- |
 *                | On success                  | 201               |
 *                | Router validation error     | 422               |
 *                | Controller validation error | 404               |
 *                | Server error                | 500               |
 */
export const projectTypeRouterCreateProjectType = Router(options).post(
  '/',
  checkSchema(<Schema>projectTypeValidationSchemaCreateProjectType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    try {
      /*
       * Handle validation errors
       * ------------------------
       *
       * Handle validation errors in relation to the fields
       * defined within 'projectTypeValidationSchemaCreateProjectType'.
       * Additionally, and because of the inclusion of 'checkExact()'
       * above, ONLY fields defined within the schema will be accepted.
       */
      if (!errors.isEmpty()) {
        res.status(422).send({ error: errors.array() });
      }

      /*
       * Pass the validated params to the controller
       * -------------------------------------------
       *
       * On validation success, retrieve the 'validatedParams' object
       * from the received 'req' (using 'matchedData') and pass them
       * to 'projectTypeController'.
       */

      const validatedParams = matchedData<IProjectTypeModel>(req);
      const stat = await projectTypeController.createProjectType(validatedParams);

      /*
       * Handle controller errors
       * ------------------------
       *
       * If the common controller response object, 'stat', is not truthy, or if
       * 'stat.error' equals true, then handle the error returned by the controller.
       */
      if (!stat || stat.error) {
        const { message, responseStatusCode } = (stat as IControllerError).payload;
        res.status(responseStatusCode).send({ error: message });
      }

      /*
       * Handle successful controller responses
       * --------------------------------------
       *
       * If the controller call proved to be successful, extract
       * 'projectTypeId' from 'stat.payload' and return
       * it with an appropriate status code.
       */

      const controllerResponsePayload = (stat as IControllerSuccess).payload;
      const { responseStatusCode } = controllerResponsePayload;
      res
        .status(responseStatusCode)
        .send({ projectTypeId: controllerResponsePayload['projectTypeId'] });
    } catch (error) {
      /*
       * Handle any errors not caught above.
       */
      const { message } = error;
      res.status(500).send({ error: message });
    }
  },
);
