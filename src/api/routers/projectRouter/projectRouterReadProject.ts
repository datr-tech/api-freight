import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@datr.tech/leith-config-api-router-options';
import { projectValidationSchemaReadProject } from '@datr.tech/cargo-router-validation-schemas-freight';
import { projectController } from '@app/api/controllers/projectController';

export const projectRouterReadProject = Router(options).get(
  '/',
  checkSchema(<Schema>projectValidationSchemaReadProject),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { projectId } = matchedData(req);
      const project = await projectController.readProject({ projectId });

      res.status(200).send({ project });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
