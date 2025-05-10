import express, { Request, Response } from 'express';
import { matchedData, validationResult } from 'express-validator';

import { CONSTS_ROUTES_BASE } from '@app/config/consts/routes';
import { EmailController } from '@app/api/controllers';
import { logger } from '@app/utils';
import { paramMessageValidator } from '@app/api/validators';
import { IEmailRouter } from '@app/interfaces/api/routers';

const router = express.Router({ mergeParams: true });

export const EmailRouter: IEmailRouter = {
  send: router.get(CONSTS_ROUTES_BASE, async (req: Request, res: Response) => {
    try {
			
      logger.info("EMAIL ROUTER");

			const { body }    = req;
			const { subject } = body;
			const response    = EmailController.send({ subject });

      res.send({ response });

    } catch(error) {
      res.status(404).send({ error: error.array() });
    }
  })
};
