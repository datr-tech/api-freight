import { ICampaignControllerCreateCampaignInput } from './ICampaignControllerCreateCampaignInput';
import { ICampaignControllerCreateCampaignOutput } from './ICampaignControllerCreateCampaignOutput';

export interface ICampaignControllerCreateCampaign {
  (
    args: ICampaignControllerCreateCampaignInput,
  ): Promise<ICampaignControllerCreateCampaignOutput>;
}
