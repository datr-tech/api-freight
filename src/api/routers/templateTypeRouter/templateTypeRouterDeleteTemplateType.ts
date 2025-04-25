import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@datr.tech/leith-config-api-router-options';
import { templateTypeValidationSchemaDeleteTemplateType } from '@datr.tech/cargo-router-validation-schemas-freight';
import { templateTypeController } from '@app/api/controllers/templateTypeController';

export const templateTypeRouterDeleteTemplateType = Router(options).get(
  '/',
  checkSchema(<Schema>templateTypeValidationSchemaDeleteTemplateType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { templateTypeId } = matchedData(req);
      const deleteResponse = await templateTypeController.deleteTemplateType({ templateTypeId });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
