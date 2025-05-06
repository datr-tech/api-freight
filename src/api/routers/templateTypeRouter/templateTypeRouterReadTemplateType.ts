import { templateTypeController } from '@app-af/api/controllers/templateTypeController';
import {
  ITemplateTypeControllerReadTemplateTypeOutputError as IControllerError,
  ITemplateTypeControllerReadTemplateTypeOutputSuccess as IControllerSuccess,
} from '@app-af/interfaces/api/controllers';
import { ITemplateTypeModel } from '@app-af/interfaces/api/models/ITemplateTypeModel';
import { templateTypeValidationSchemaReadTemplateType } from '@datr.tech/cargo-router-validation-schemas-freight';
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
 * @name					templateTypeRouterReadTemplateType
 *
 * @description		The 'readTemplateType' router for 'templateType', whose expected
 *                inputs have been defined within the following schema:
 *                'templateTypeValidationSchemaReadTemplateType'.
 *
 *                The schema will be used by 'express-validator' to perform input validation.
 *                When the validation process succeeds, control will pass to the associated
 *                controller, 'templateTypeController', which, when successful, will return
 *                a common status (or 'stat') object, whose 'payload' will contain
 *                'templateTypeModel'.
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
 *                | On success                  | 200               |
 *                | Router validation error     | 422               |
 *                | Controller validation error | 404               |
 *                | Server error                | 500               |
 */
export const templateTypeRouterReadTemplateType = Router(options).get(
  '/',
  checkSchema(<Schema>templateTypeValidationSchemaReadTemplateType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    try {
      /*
       * Handle validation errors
       * ------------------------
       *
       * Handle validation errors in relation to the fields
       * defined within 'templateTypeValidationSchemaReadTemplateType'.
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
       * to 'templateTypeController'.
       */

      const validatedParams = matchedData<ITemplateTypeModel>(req);
      const stat = await templateTypeController.readTemplateType(validatedParams);

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
       * 'templateTypeModel' from 'stat.payload' and return
       * it with an appropriate status code.
       */

      const { templateTypeModel, responseStatusCode } = (stat as IControllerSuccess)
        .payload;
      res.status(responseStatusCode).send({ templateTypeModel });
    } catch (error) {
      /*
       * Handle any errors not caught above.
       */
      const { message } = error;
      res.status(500).send({ error: message });
    }
  },
);
