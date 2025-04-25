import { campaignTypeController } from '@app-af/api/controllers/campaignTypeController';
import { campaignTypeValidationSchemaReadCampaignType } from '@datr.tech/cargo-router-validation-schemas-freight';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const campaignTypeRouterReadCampaignType = Router(options).get(
  '/',
  checkSchema(<Schema>campaignTypeValidationSchemaReadCampaignType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { campaignTypeId } = matchedData(req);
      const campaignType = await campaignTypeController.readCampaignType({
        campaignTypeId,
      });

      res.status(200).send({ campaignType });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
