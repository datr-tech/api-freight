import { projectController } from '@app-af/api/controllers/projectController';
import { projectValidationSchemaUpdateProject } from '@datr.tech/cargo-router-validation-schemas-freight';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const projectRouterUpdateProject = Router(options).patch(
  '/',
  checkSchema(<Schema>projectValidationSchemaUpdateProject),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { projectId, ...payload } = matchedData(req);
      const updateStatus = await projectController.updateProject({ projectId, payload });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
