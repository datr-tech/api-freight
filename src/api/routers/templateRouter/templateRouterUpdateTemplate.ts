import { templateController } from '@app-af/api/controllers/templateController';
import { templateValidationSchemaUpdateTemplate } from '@datr.tech/cargo-router-validation-schemas-freight';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const templateRouterUpdateTemplate = Router(options).patch(
  '/',
  checkSchema(<Schema>templateValidationSchemaUpdateTemplate),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { templateId, ...payload } = matchedData(req);
      const updateStatus = await templateController.updateTemplate({
        templateId,
        payload,
      });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
