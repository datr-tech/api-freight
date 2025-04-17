import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { templateValidationSchemaUpdateTemplate } from '@freight/freight-router-validation-schemas';
import { templateController } from '@app/api/controllers/templateController';

export const templateRouterUpdateTemplate = Router(options).patch(
  '/',
  checkSchema(<Schema>templateValidationSchemaUpdateTemplate),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { templateId, ...payload } = matchedData(req);
      const updateStatus = await templateController.updateTemplate({ templateId, payload });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
