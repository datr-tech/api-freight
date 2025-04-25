import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@datr.tech/leith-config-api-router-options';
import { campaignValidationSchemaReadCampaign } from '@datr.tech/cargo-router-validation-schemas-freight';
import { campaignController } from '@app/api/controllers/campaignController';

export const campaignRouterReadCampaign = Router(options).get(
  '/',
  checkSchema(<Schema>campaignValidationSchemaReadCampaign),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { campaignId } = matchedData(req);
      const campaign = await campaignController.readCampaign({ campaignId });

      res.status(200).send({ campaign });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
