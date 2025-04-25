import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@datr.tech/leith-config-api-router-options';
import { campaignTypeValidationSchemaDeleteCampaignType } from '@datr.tech/cargo-router-validation-schemas-freight';
import { campaignTypeController } from '@app/api/controllers/campaignTypeController';

export const campaignTypeRouterDeleteCampaignType = Router(options).get(
  '/',
  checkSchema(<Schema>campaignTypeValidationSchemaDeleteCampaignType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { campaignTypeId } = matchedData(req);
      const deleteResponse = await campaignTypeController.deleteCampaignType({ campaignTypeId });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
