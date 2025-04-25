import { projectTypeController } from '@app-af/api/controllers/projectTypeController';
import { IProjectTypeModel } from '@app-af/interfaces/api/models/IProjectTypeModel';
import { projectTypeValidationSchemaCreateProjectType } from '@datr.tech/cargo-router-validation-schemas-freight';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const projectTypeRouterCreateProjectType = Router(options).post(
  '/',
  checkSchema(<Schema>projectTypeValidationSchemaCreateProjectType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IProjectTypeModel>(req);
      const projectTypeId =
        await projectTypeController.createProjectType(validatedParams);

      res.status(201).send({ projectTypeId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
