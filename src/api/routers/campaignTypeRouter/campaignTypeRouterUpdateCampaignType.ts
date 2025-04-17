import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { campaignTypeValidationSchemaUpdateCampaignType } from '@freight/freight-router-validation-schemas';
import { campaignTypeController } from '@app/api/controllers/campaignTypeController';

export const campaignTypeRouterUpdateCampaignType = Router(options).patch(
  '/',
  checkSchema(<Schema>campaignTypeValidationSchemaUpdateCampaignType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { campaignTypeId, ...payload } = matchedData(req);
      const updateStatus = await campaignTypeController.updateCampaignType({ campaignTypeId, payload });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
