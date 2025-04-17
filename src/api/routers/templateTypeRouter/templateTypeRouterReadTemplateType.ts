import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { templateTypeValidationSchemaReadTemplateType } from '@freight/freight-router-validation-schemas';
import { templateTypeController } from '@app/api/controllers/templateTypeController';

export const templateTypeRouterReadTemplateType = Router(options).get(
  '/',
  checkSchema(<Schema>templateTypeValidationSchemaReadTemplateType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { templateTypeId } = matchedData(req);
      const templateType = await templateTypeController.readTemplateType({ templateTypeId });

      res.status(200).send({ templateType });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
