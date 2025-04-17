import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { campaignValidationSchemaCreateCampaign } from '@freight/freight-router-validation-schemas';
import { campaignController } from '@app/api/controllers/campaignController';
import { ICampaignModel } from '@app/interfaces/api/models/ICampaignModel';

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
