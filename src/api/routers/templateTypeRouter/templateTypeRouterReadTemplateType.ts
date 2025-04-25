import { templateTypeController } from '@app-af/api/controllers/templateTypeController';
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

export const templateTypeRouterReadTemplateType = Router(options).get(
  '/',
  checkSchema(<Schema>templateTypeValidationSchemaReadTemplateType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { templateTypeId } = matchedData(req);
      const templateType = await templateTypeController.readTemplateType({
        templateTypeId,
      });

      res.status(200).send({ templateType });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
