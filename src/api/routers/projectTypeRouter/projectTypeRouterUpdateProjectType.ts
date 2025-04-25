import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@datr.tech/leith-config-api-router-options';
import { projectTypeValidationSchemaUpdateProjectType } from '@datr.tech/cargo-router-validation-schemas-freight';
import { projectTypeController } from '@app/api/controllers/projectTypeController';

export const projectTypeRouterUpdateProjectType = Router(options).patch(
  '/',
  checkSchema(<Schema>projectTypeValidationSchemaUpdateProjectType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { projectTypeId, ...payload } = matchedData(req);
      const updateStatus = await projectTypeController.updateProjectType({ projectTypeId, payload });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
