import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { templateTypeValidationSchemaCreateTemplateType } from '@freight/freight-router-validation-schemas';
import { templateTypeController } from '@app/api/controllers/templateTypeController';
import { ITemplateTypeModel } from '@app/interfaces/api/models/ITemplateTypeModel';

export const templateTypeRouterCreateTemplateType = Router(options).post(
  '/',
  checkSchema(<Schema>templateTypeValidationSchemaCreateTemplateType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<ITemplateTypeModel>(req);
      const templateTypeId = await templateTypeController.createTemplateType(validatedParams);

      res.status(201).send({ templateTypeId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
