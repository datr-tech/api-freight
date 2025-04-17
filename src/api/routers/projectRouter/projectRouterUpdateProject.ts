import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { projectValidationSchemaUpdateProject } from '@freight/freight-router-validation-schemas';
import { projectController } from '@app/api/controllers/projectController';

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
