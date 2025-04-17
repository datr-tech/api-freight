import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { campaignTypeValidationSchemaReadCampaignType } from '@freight/freight-router-validation-schemas';
import { campaignTypeController } from '@app/api/controllers/campaignTypeController';

export const campaignTypeRouterReadCampaignType = Router(options).get(
  '/',
  checkSchema(<Schema>campaignTypeValidationSchemaReadCampaignType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { campaignTypeId } = matchedData(req);
      const campaignType = await campaignTypeController.readCampaignType({ campaignTypeId });

      res.status(200).send({ campaignType });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
