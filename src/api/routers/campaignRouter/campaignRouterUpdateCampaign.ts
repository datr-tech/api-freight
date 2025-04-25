import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@datr.tech/leith-config-api-router-options';
import { campaignValidationSchemaUpdateCampaign } from '@datr.tech/cargo-router-validation-schemas-freight';
import { campaignController } from '@app/api/controllers/campaignController';

export const campaignRouterUpdateCampaign = Router(options).patch(
  '/',
  checkSchema(<Schema>campaignValidationSchemaUpdateCampaign),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { campaignId, ...payload } = matchedData(req);
      const updateStatus = await campaignController.updateCampaign({ campaignId, payload });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
