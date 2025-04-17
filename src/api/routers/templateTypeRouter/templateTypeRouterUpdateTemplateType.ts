import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { templateTypeValidationSchemaUpdateTemplateType } from '@freight/freight-router-validation-schemas';
import { templateTypeController } from '@app/api/controllers/templateTypeController';

export const templateTypeRouterUpdateTemplateType = Router(options).patch(
  '/',
  checkSchema(<Schema>templateTypeValidationSchemaUpdateTemplateType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { templateTypeId, ...payload } = matchedData(req);
      const updateStatus = await templateTypeController.updateTemplateType({ templateTypeId, payload });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
