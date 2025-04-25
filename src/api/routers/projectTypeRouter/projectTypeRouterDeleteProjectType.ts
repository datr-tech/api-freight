import { projectTypeController } from '@app-af/api/controllers/projectTypeController';
import { projectTypeValidationSchemaDeleteProjectType } from '@datr.tech/cargo-router-validation-schemas-freight';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const projectTypeRouterDeleteProjectType = Router(options).get(
  '/',
  checkSchema(<Schema>projectTypeValidationSchemaDeleteProjectType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { projectTypeId } = matchedData(req);
      const deleteResponse = await projectTypeController.deleteProjectType({
        projectTypeId,
      });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
