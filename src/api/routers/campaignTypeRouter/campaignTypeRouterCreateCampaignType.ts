import { campaignTypeController } from '@app-af/api/controllers/campaignTypeController';
import { ICampaignTypeModel } from '@app-af/interfaces/api/models/ICampaignTypeModel';
import { campaignTypeValidationSchemaCreateCampaignType } from '@datr.tech/cargo-router-validation-schemas-freight';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const campaignTypeRouterCreateCampaignType = Router(options).post(
  '/',
  checkSchema(<Schema>campaignTypeValidationSchemaCreateCampaignType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<ICampaignTypeModel>(req);
      const campaignTypeId =
        await campaignTypeController.createCampaignType(validatedParams);

      res.status(201).send({ campaignTypeId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
