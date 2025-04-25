import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@datr.tech/leith-config-api-router-options';
import { templateValidationSchemaDeleteTemplate } from '@datr.tech/cargo-router-validation-schemas-freight';
import { templateController } from '@app/api/controllers/templateController';

export const templateRouterDeleteTemplate = Router(options).get(
  '/',
  checkSchema(<Schema>templateValidationSchemaDeleteTemplate),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { templateId } = matchedData(req);
      const deleteResponse = await templateController.deleteTemplate({ templateId });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
