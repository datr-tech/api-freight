import { campaignTypeController } from '@app-af/api/controllers/campaignTypeController';
import { campaignTypeValidationSchemaUpdateCampaignType } from '@datr.tech/cargo-router-validation-schemas-freight';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const campaignTypeRouterUpdateCampaignType = Router(options).patch(
  '/',
  checkSchema(<Schema>campaignTypeValidationSchemaUpdateCampaignType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { campaignTypeId, ...payload } = matchedData(req);
      const updateStatus = await campaignTypeController.updateCampaignType({
        campaignTypeId,
        payload,
      });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
