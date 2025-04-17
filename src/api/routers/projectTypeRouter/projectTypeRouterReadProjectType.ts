import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { projectTypeValidationSchemaReadProjectType } from '@freight/freight-router-validation-schemas';
import { projectTypeController } from '@app/api/controllers/projectTypeController';

export const projectTypeRouterReadProjectType = Router(options).get(
  '/',
  checkSchema(<Schema>projectTypeValidationSchemaReadProjectType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { projectTypeId } = matchedData(req);
      const projectType = await projectTypeController.readProjectType({ projectTypeId });

      res.status(200).send({ projectType });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
