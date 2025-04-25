import { templateTypeController } from '@app-af/api/controllers/templateTypeController';
import { templateTypeValidationSchemaUpdateTemplateType } from '@datr.tech/cargo-router-validation-schemas-freight';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const templateTypeRouterUpdateTemplateType = Router(options).patch(
  '/',
  checkSchema(<Schema>templateTypeValidationSchemaUpdateTemplateType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { templateTypeId, ...payload } = matchedData(req);
      const updateStatus = await templateTypeController.updateTemplateType({
        templateTypeId,
        payload,
      });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
