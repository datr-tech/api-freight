import { ICampaignControllerUpdateCampaignInput } from './ICampaignControllerUpdateCampaignInput';
import { ICampaignControllerUpdateCampaignOutput } from './ICampaignControllerUpdateCampaignOutput';

export interface ICampaignControllerUpdateCampaign {
  (
    args: ICampaignControllerUpdateCampaignInput,
  ): Promise<ICampaignControllerUpdateCampaignOutput>;
}
