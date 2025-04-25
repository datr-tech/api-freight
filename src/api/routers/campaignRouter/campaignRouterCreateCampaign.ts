import { campaignController } from '@app-af/api/controllers/campaignController';
import { ICampaignModel } from '@app-af/interfaces/api/models/ICampaignModel';
import { campaignValidationSchemaCreateCampaign } from '@datr.tech/cargo-router-validation-schemas-freight';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const campaignRouterCreateCampaign = Router(options).post(
  '/',
  checkSchema(<Schema>campaignValidationSchemaCreateCampaign),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<ICampaignModel>(req);
      const campaignId = await campaignController.createCampaign(validatedParams);

      res.status(201).send({ campaignId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
