import { app } from '@app-af/api';
import { apiName, apiPort } from '@app-af/config';
import { logger } from '@datr.tech/leith-common-logger';
import 'dotenv/config';

app.listen(apiPort, () => {
  logger.info(`${apiName} listening on ${apiPort}`);

  (async () => {
    //await db.connect();
  })();
});
