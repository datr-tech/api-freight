import 'dotenv/config';

import { logger } from '@datr.tech/leith-common-logger';
import { db } from '@datr.tech/leith-common-mongodb-connector';
import { freightSeeder } from '@datr.tech/leith-common-seeders';

import { app } from '@app-af/api';
import {
  CampaignModel,
  CampaignTypeModel,
  ProjectModel,
  ProjectTypeModel,
  TemplateModel,
  TemplateTypeModel,
} from '@app-af/api/models';
import { apiName, apiPort, dbHost, dbName, dbPort } from '@app-af/config';

app.listen(apiPort, () => {
  logger.info(`api-${apiName} listening on ${apiPort}`);

  (async () => {
    const stat = await db.connect({
      host: dbHost,
      name: dbName,
      port: dbPort,
      user: undefined,
      pass: undefined,
    });

    const { isConnected } = stat;

    if (isConnected) {
      await freightSeeder(
        CampaignModel,
        CampaignTypeModel,
        ProjectModel,
        ProjectTypeModel,
        TemplateModel,
        TemplateTypeModel,
      );
    }
  })();
});
