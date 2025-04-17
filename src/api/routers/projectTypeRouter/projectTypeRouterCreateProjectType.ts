import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { projectTypeValidationSchemaCreateProjectType } from '@freight/freight-router-validation-schemas';
import { projectTypeController } from '@app/api/controllers/projectTypeController';
import { IProjectTypeModel } from '@app/interfaces/api/models/IProjectTypeModel';

export const projectTypeRouterCreateProjectType = Router(options).post(
  '/',
  checkSchema(<Schema>projectTypeValidationSchemaCreateProjectType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IProjectTypeModel>(req);
      const projectTypeId = await projectTypeController.createProjectType(validatedParams);

      res.status(201).send({ projectTypeId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
