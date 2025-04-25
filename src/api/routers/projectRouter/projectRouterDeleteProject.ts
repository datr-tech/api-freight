import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@datr.tech/leith-config-api-router-options';
import { projectValidationSchemaDeleteProject } from '@datr.tech/cargo-router-validation-schemas-freight';
import { projectController } from '@app/api/controllers/projectController';

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
