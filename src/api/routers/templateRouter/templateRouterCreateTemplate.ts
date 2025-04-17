import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { templateValidationSchemaCreateTemplate } from '@freight/freight-router-validation-schemas';
import { templateController } from '@app/api/controllers/templateController';
import { ITemplateModel } from '@app/interfaces/api/models/ITemplateModel';

export const templateRouterCreateTemplate = Router(options).post(
  '/',
  checkSchema(<Schema>templateValidationSchemaCreateTemplate),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<ITemplateModel>(req);
      const templateId = await templateController.createTemplate(validatedParams);

      res.status(201).send({ templateId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
