import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { campaignValidationSchemaDeleteCampaign } from '@freight/freight-router-validation-schemas';
import { campaignController } from '@app/api/controllers/campaignController';

export const campaignRouterDeleteCampaign = Router(options).get(
  '/',
  checkSchema(<Schema>campaignValidationSchemaDeleteCampaign),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { campaignId } = matchedData(req);
      const deleteResponse = await campaignController.deleteCampaign({ campaignId });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
