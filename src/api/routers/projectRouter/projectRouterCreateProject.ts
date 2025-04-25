import { projectController } from '@app-af/api/controllers/projectController';
import { IProjectModel } from '@app-af/interfaces/api/models/IProjectModel';
import { projectValidationSchemaCreateProject } from '@datr.tech/cargo-router-validation-schemas-freight';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const projectRouterCreateProject = Router(options).post(
  '/',
  checkSchema(<Schema>projectValidationSchemaCreateProject),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IProjectModel>(req);
      const projectId = await projectController.createProject(validatedParams);

      res.status(201).send({ projectId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
