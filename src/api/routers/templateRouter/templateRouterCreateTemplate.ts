import { templateController } from '@app-af/api/controllers/templateController';
import { ITemplateModel } from '@app-af/interfaces/api/models/ITemplateModel';
import { templateValidationSchemaCreateTemplate } from '@datr.tech/cargo-router-validation-schemas-freight';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

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
