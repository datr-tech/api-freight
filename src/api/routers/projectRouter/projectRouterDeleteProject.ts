import { projectController } from '@app-af/api/controllers/projectController';
import { projectValidationSchemaDeleteProject } from '@datr.tech/cargo-router-validation-schemas-freight';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const projectRouterDeleteProject = Router(options).get(
  '/',
  checkSchema(<Schema>projectValidationSchemaDeleteProject),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { projectId } = matchedData(req);
      const deleteResponse = await projectController.deleteProject({ projectId });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
